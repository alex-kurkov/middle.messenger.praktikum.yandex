import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

export class OnboardingPage extends Block {
  
  constructor() {
    super();
    this.setProps({
      onButtonClick: (e: Event) => console.log(e),
    });
  }
  render() {
    return template;
  }
}
