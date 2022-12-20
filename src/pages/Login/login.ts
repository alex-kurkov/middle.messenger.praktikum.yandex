import Block from 'core/Block';
import template from 'bundle-text:./login.hbs';
import { InputProps } from 'components/input/input';
import ValidatorController from 'core/ValidatorController';

interface LoginProps {
  formTitle: string;
  formName: string;
  inputs: InputProps[];
  formButton: {
    text: string
  }
  addon: {
    text?: Nullable<string>;
    link: string;
    linkText: string;
  };
}
export class Login extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super(props);

    const validator = new ValidatorController(this, props.inputs);
    validator.init();

    this.eventBus.on(Block.EVENTS.FORM_SUBMIT, () => console.log(validator.errors));

    const submitButton = this.refs.formRef.refs.submitButton;
    if (submitButton) {
      submitButton
        .getContent()
        .addEventListener('click', () =>
          this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)
        );
    }

  }

  render() {
    return template;
  }
}
