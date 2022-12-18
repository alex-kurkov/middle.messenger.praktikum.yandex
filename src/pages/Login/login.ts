import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import { InputProps } from '../../components/input/input';

interface LoginProps {
  form: {
    formTitle:string,
    inputs: Array<InputProps>
  }
}

export class Login extends Block<{}> {
  render() {
    return template;
  }
}
