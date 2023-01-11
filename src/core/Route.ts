import Block from './Block';
import { BlockConstructable } from './registerComponent';
import renderDOM from './renderDOM';
import { isEqual } from 'utils/isEqual';


export default class Route<P extends {[key: string]: any}>  {
  private _pathname = '';
  private _block: Nullable<Block<P>> = null;
  private _blockClass: BlockConstructable<P>;
  private _props: P;

  constructor(
    pathname: string,
    view: BlockConstructable<P>,
    props: P
  ) {
    this._pathname = pathname;
    this._props = props;
    this._blockClass = view;
  }

  get pathname(): string {
    return this._pathname;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block?.hide();
  }

  match(pathname: string): boolean {
    return isEqual({pathname}, {pathname: this._pathname});
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      renderDOM(this._props.rootQuery, this._block);
    }
    this._block.show();
  }
}
