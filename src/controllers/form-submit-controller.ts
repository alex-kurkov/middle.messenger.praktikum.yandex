import { ValidatorController } from 'core';

// eslint-disable-next-line no-shadow
enum FormNames {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
  MESSAGE = 'message',
  SEARCH = 'search',
}

class FormSubmitController {
  __instance: Nullable<FormSubmitController> = null;
  constructor() {
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  public handleFormSubmit(
    formNode: HTMLFormElement,
    validator: ValidatorController
  ): void {
    // console.log('Ошибки: ', validator.errors);
    // console.log('Данные: ', validator.values);
    // console.log('Форма: ', formNode);

    if (validator.hasErrors) {
      validator.showAllErrors();
      return;
    }

    
    switch (formNode.name) {
      case FormNames.SIGNIN:
        console.log(FormNames.SIGNIN);
        break;
      case FormNames.SIGNUP:
        console.log(FormNames.SIGNUP);
        break;
      case FormNames.MESSAGE:
        console.log(FormNames.MESSAGE);
        break;
      case FormNames.SEARCH:
        console.log(FormNames.SEARCH
          );
        break;
      default:
        throw new Error(`не найдена форма с именем ${formNode.name}`);
    }
  }
}

export const formSubmitController = new FormSubmitController();
