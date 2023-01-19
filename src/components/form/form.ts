import Block from 'core/Block';
import './form.css';
import template from 'bundle-text:./form.hbs';

export class Form<P extends object> extends Block<P> {
  static componentName = 'Form';
  constructor(props: P) {
    super(props);
    this.getContent()
      .addEventListener('submit', (e) => e.preventDefault());
  }

  render() {
    return template;
  }
}
