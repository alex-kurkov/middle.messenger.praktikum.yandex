import Block from 'core/Block';
import template from 'bundle-text:./login.hbs';
import { InputProps } from 'components/input/input';
import Validator from 'core/Validator';
interface LoginProps {
  formTitle?: string;
  inputs: InputProps[];
  formRef?: string;
  addon: {
    text?: Nullable<string>;
    link: string;
    linkText: string;
  };
}

export class Login extends Block<{}> {
  constructor(props: LoginProps) {
    const { formTitle, inputs: inputsRaw, addon } = props;
    super({ formTitle, addon });
    const validator = new Validator(this, inputsRaw);
    validator.init();
  }

  render() {
    return template;
  }
}
