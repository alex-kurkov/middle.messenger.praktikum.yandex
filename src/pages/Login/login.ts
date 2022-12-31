import Block from 'core/Block';
import template from 'bundle-text:./login.hbs';
import { InputProps } from 'components/input/input';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';

interface LoginProps {
  formTitle: string;
  formName: string;
  inputs: InputProps[];
  formButton: {
    text: string;
  };
  addon: {
    text?: Nullable<string>;
    link: string;
    linkText: string;
  };
}

// @ts-ignore
@withLiveValidator
export class Login extends Block<LoginProps> {
  static componentName = 'Login';

  render() {
    return template;
  }
}
