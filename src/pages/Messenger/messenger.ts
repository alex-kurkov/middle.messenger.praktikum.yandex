import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface MessengerProps {
  sideMenuExpanded: boolean;
  feedEmpty: boolean;
}


export class Messenger extends Block<{}> {
  render() {
    return template;
  }
}
