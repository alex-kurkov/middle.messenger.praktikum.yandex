import Block from 'core/Block';
import './avatar.css';
import template from 'bundle-text:./avatar.hbs';

export default class Avatar<P extends {abbr: string}> extends Block<P> {
  static componentName = 'Avatar';


  constructor(props: P) {
    super({
      ...props,
      abbr: props.abbr?.charAt(0)?.toUpperCase(),
    })
  }

  render() {
    return template;
  }
}
