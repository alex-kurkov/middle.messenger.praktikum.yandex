import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

interface BlockMeta<P extends object> {
  props?: P;
}

export type BlockEvents = Values<typeof Block.EVENTS>;

export default class Block<P extends object> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  readonly _meta: BlockMeta<P>;

  protected _element: Nullable<HTMLElement> = null;

  protected readonly props: P;

  protected children: { [id: string]: Block<object> } = {};

  eventBus: EventBus<string>;

  refs: { [key: string]: Block<object> } = {};

  state: object = {};

  constructor(props: P) {
    this.eventBus = new EventBus<BlockEvents>();

    this._meta = {
      props,
    };

    this.getStateFromProps();

    this.props = this._makePropsProxy(props) as P;

    this._registerEvents(this.eventBus);

    this.eventBus.emit(Block.EVENTS.INIT, this.props);
  }

  private _registerEvents(eventBus: EventBus<BlockEvents>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this) as () => void
    );
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    this._element = this._createDocumentElement('div');
  }

  protected getStateFromProps(): void {
    this.state = {};
  }

  private init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER, this.props);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {
    return;
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: P, newProps: P): boolean {
    if (oldProps !== newProps) {
      return true;
    }
    return false;
  }

  setState = (nextState: object) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  setProps = (nextProps: unknown) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const fragment = this._compile();

    this.removeEvents();
    const newElement = fragment.firstElementChild;

    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement as HTMLElement;
    this.addEvents();
  }

  protected render(): string {
    return '';
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (
          this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ) {
          this.eventBus.emit(Block.EVENTS.FLOW_CDM);
        }
      }, 100);
    }
    return this.element as HTMLElement;
  }

  _makePropsProxy = (props: object): object => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // const self = this;

    return new Proxy(props as unknown as object, {
      get: (target: Record<string, unknown>, prop: string) => {
        const value = Reflect.get(target, prop);
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        const oldProps = { ...target };
        Reflect.set(target, prop, value);
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    }) as unknown as P;
  };

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  removeEvents() {
    const { events } = this.props as { events: object };

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      if (this._element) {
        this._element.removeEventListener(event, listener);
      }
    });
  }

  addEvents() {
    const { events } = this.props as { events: object };

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      if (this._element) {
        this._element.addEventListener(event, listener);
      }
    });
  }

  _compile(): DocumentFragment {
    const fragment = document.createElement('template');

    const template = Handlebars.compile(this.render());
    fragment.innerHTML = template({
      ...this.state,
      ...this.props,
      children: this.children,
      refs: this.refs,
    });

    Object.entries(this.children).forEach(([id, component]) => {
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);
      if (!stub) {
        return;
      }

      const stubChildren = stub.childNodes.length ? stub.childNodes : [];

      const content = component.getContent();
      stub.replaceWith(content);

      const layoutContent = content.querySelector('[data-slot="1"]');

      if (layoutContent && stubChildren.length) {
        layoutContent.append(...stubChildren);
      }
    });

    return fragment.content;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
