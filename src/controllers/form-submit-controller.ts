import { ValidatorController } from 'core';
import { authApi } from 'services/api';
import { chatCommonController } from './chat-common-controller';
import { userAuthController } from './user-auth-controller';
import { userChangeController } from './user-change-controller';

// eslint-disable-next-line no-shadow
enum FormNames {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
  MESSAGE = 'message',
  SEARCH = 'search',
  EDIT_PASSWORD = 'editPassword',
  EDIT_DATA = 'editData',
  ADD_CHAT = 'addChat',
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
    console.log('Форма: ', formNode);
    console.log(validator);

    if (validator.hasErrors) {
      validator.showAllErrors();
      return;
    }

    switch (formNode.name) {
      case FormNames.SIGNIN:
        this.submitSignIn(
          validator.values as { login: string; password: string }
        );
        break;
      case FormNames.SIGNUP:
        this.submitSignUp(validator.values as Omit<MSNUser, 'id' | 'avatar'>);
        break;
      case FormNames.MESSAGE:
        console.log(FormNames.MESSAGE);
        break;
      case FormNames.SEARCH:
        console.log(FormNames.SEARCH);
        break;
      case FormNames.EDIT_DATA:
        this.submitChangeUserData(validator.values);
        break;
      case FormNames.EDIT_PASSWORD:
        this.submitChangePassword(
          validator.values as {
            oldPassword: string;
            newPassword: string;
          }
        );
        break;
      case FormNames.ADD_CHAT:
        this.submitAddChat(
          validator.values as {
            title: string;
          }
        );

        break;
      default:
        throw new Error(`не найдена форма с именем ${formNode.name}`);
    }
  }

  private submitSignIn(values: { login: string; password: string }) {
    authApi.requestSignin(values).then((xhr) => {
      if (xhr.status === 200) {
        return userAuthController.auth('/messenger');
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  private submitSignUp(values: Omit<MSNUser, 'id' | 'avatar'>) {
    authApi.requestSignup(values).then((xhr) => {
      return Promise.resolve(xhr.response);
    });
  }

  private submitChangeUserData(values: Omit<MSNUser, 'id' | 'avatar'>) {
    userChangeController.changeUserData(values);
  }

  private submitChangePassword(values: {
    oldPassword: string;
    newPassword: string;
  }) {
    userChangeController.changePassword(values);
  }

  private submitAddChat(values: { title: string }) {
    chatCommonController.addChat(values.title);
  }
}

export const formSubmitController = new FormSubmitController();
