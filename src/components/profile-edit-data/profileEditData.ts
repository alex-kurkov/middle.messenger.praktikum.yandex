import Block from 'core/Block';
import ValidatorController from 'core/ValidatorController';
import { InputProps } from 'components/input/input';
import './profileEditData.css';
import template from 'bundle-text:./profileEditData.hbs';

interface ProfileEditProps {
  inputs: InputProps[];
  formButton: {
    text: string;
  }
}

export class ProfileEditData extends Block<Omit<ProfileEditProps, 'inputs'>> {
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
