import Block from "core/Block";
import ValidatorController from "core/ValidatorController";
import './profileEditPassword.css';
import template from 'bundle-text:./profileEditPassword.hbs';
import { InputProps } from "components/input/input";

interface ProfileEditProps {
  formTitle?: string;
  inputs: InputProps[];
  formButton: {
    text: string;
  };
}

export class ProfileEditPassword extends Block<Omit<ProfileEditProps, 'inputs'>> {
  constructor(props: ProfileEditProps) {
    super(props);

    const validator = new ValidatorController(this, props.inputs);
    validator.init();

    this.eventBus.on(Block.EVENTS.FORM_SUBMIT, () =>
      console.log(validator.errors)
    );

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
