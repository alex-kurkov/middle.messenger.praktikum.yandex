import Block from 'core/Block';
import './new-message.css';
import template from 'bundle-text:./new-message.hbs';
import { MessengerSocket } from 'core/MessengerSocket';
import { store } from 'core';

export default class NewMessage<P extends {
  messenger: MessengerSocket
}> extends Block<P> {
  static componentName = 'NewMessage';
  constructor(props: P) {
    super({
      ...props,
      handleFileAdd: () => {
        console.log('file adding handler');
      },
      handleSubmit: () => {
        const textInput = this.refs['text_input'].getContent() as HTMLInputElement;

        const { value } = textInput;
        if (!value || !value.length) {
          return;
        }

        const messenger = store.state.socket;
        messenger?.text(value);
        textInput.value = '';
      },
    });
  }

  render() {
    return template;
  }
}
