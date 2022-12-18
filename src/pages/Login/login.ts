import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import { InputProps } from '../../components/input/input';

interface LoginProps {
  form: {
    formTitle: string;
    inputs: Array<InputProps>;
    addon: {
      text?: Nullable<string>;
      link?: string;
      linkText?: string;
    };
  };
}

export class Login extends Block<{}> {
  render() {
    return template;
  }
}
