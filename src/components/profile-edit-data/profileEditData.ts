import Block from 'core/Block';
import ValidatorController from 'core/ValidatorController';
import { InputProps } from 'components/input/input';
import './profileEditData.css';
import template from 'bundle-text:./profileEditData.hbs';

interface ProfileEditProps {
  inputs: InputProps[];
  formButton: {
    text: string;
  };
}

export class ProfileEditData extends Block<Omit<ProfileEditProps, 'inputs'>> {
  static componentName = 'ProfileEditData';

  constructor(props: ProfileEditProps) {
    super(props);
    const validator = new ValidatorController(this, props.inputs, true);

    this.eventBus.on(Block.EVENTS.FORM_SUBMIT, () => {
      console.log('Ошибки: ', validator.errors);
      console.log('Данные: ', validator.values);
    });

    const { submitButton } = this.refs.formRef.refs;
    if (submitButton) {
      submitButton
        .getContent()
        .addEventListener('click', () =>
          this.eventBus.emit(Block.EVENTS.FORM_SUBMIT));
    }
  }

  render() {
    return template;
  }
}
