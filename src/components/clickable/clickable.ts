import Block from 'core/Block';
import template from './clickable.hbs';
import './clickable.css';

export class Clickable<P extends { onClick: () => void }> extends Block<P> {
  static componentName = 'Clickable';

  constructor(props: P) {
    super({
      ...props,
      events: {
        click: props.onClick
      },
    });
  }

  protected render(): string {
    return template;
  }
}
