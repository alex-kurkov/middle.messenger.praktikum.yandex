import Block from 'core/Block';
import './chat-add-dialog.css';
import template from 'bundle-text:./chat-add-dialog.hbs';
import { withAddChatDialog } from 'services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';
import { ValidatorController } from 'core';
import { withLiveValidator } from 'services/class-decorators/with-live-validator';

@withLiveValidator
@withAddChatDialog
export class ChatAddDialog<P extends object> extends Block<P> {
  static componentName = 'ChatAddDialog';
  constructor(props: P) {
    super({
      ...props,
      closeDialog: () => {
        interfaceController.hideAddChatDialog();
      },
      handleSubmit: () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
      },
    });
  }
  render() {
    return template;
  }
}
