import Block from 'core/Block';
import './new-message.css';
import template from 'bundle-text:./new-message.hbs';
import { withSocketMessenger } from 'services/class-decorators/store-connectors';
import { MessengerSocket } from 'core/MessengerSocket';

@withSocketMessenger
export default class NewMessage<P extends {
  messenger: MessengerSocket
}> extends Block<P> {
  static componentName = 'NewMessage';
  constructor(props: P) {
    super({
      ...props,
      handleFileAdd: () => {
        console.log('file adding');
      },
      handleSubmit: () => {
        const textInput = this.refs['text_input'].getContent() as HTMLInputElement;

        const { value } = textInput;
        if (!value || !value.length) {
          return;
        }
        props.messenger.text(value);
      },
    });
  }

  render() {
    return template;
  }
}
