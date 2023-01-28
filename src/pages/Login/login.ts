import Block from 'core/Block';
import template from './login.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import { ValidatorController } from 'core';

@withLiveValidator
export class LoginPage extends Block<object> {
  static componentName = 'LoginPage';
  constructor(props: object) {
    super({
      ...props,
      handleSubmit: () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
      },
    });
  }

  render() {
    return template;
  }
}
