import Block from 'core/Block';
import template from 'bundle-text:./messenger.hbs';
import { InputProps } from 'components/input/input';

interface MessengerProps {
  sideMenuExpanded: boolean;
  feedEmpty: boolean;
  inputs: InputProps[];
  // TODO Lookup models for chats and chatMessages from API when adding logic...
  chats: [];
  chatMessages: [];
}

export class Messenger extends Block<MessengerProps> {
  static componentName = 'Messenger';

  render() {
    return template;
  }
}
