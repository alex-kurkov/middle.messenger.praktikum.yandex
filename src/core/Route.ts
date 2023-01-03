import Block from './Block';
import { BlockConstructable } from './registerComponent';
import renderDOM from './renderDOM';
import { isEqual } from 'utils/isEqual';

interface RouteProps {
  rootQuery?: string;
}

export default class Route<P extends object> {
  private _pathname = '';
  private _block: Nullable<Block<object>> = null;
  private _blockClass: BlockConstructable<object>;
  private _props: RouteProps & P;

  constructor(
    pathname: string,
    view: BlockConstructable<object>,
    props: RouteProps & P
  ) {
    this._pathname = pathname;
    this._props = props;
    this._blockClass = view;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      renderDOM(this._props.rootQuery, this._block);
      return;
    }
    this._block.show();
  }
}
