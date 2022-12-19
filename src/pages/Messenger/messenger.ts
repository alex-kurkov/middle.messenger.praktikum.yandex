import Block from 'core/Block';
import template from 'bundle-text:./messenger.hbs';

interface MessengerProps {
  sideMenuExpanded: boolean;
  feedEmpty: boolean;
}


export class Messenger extends Block<MessengerProps> {
  render() {
    return template;
  }
}
