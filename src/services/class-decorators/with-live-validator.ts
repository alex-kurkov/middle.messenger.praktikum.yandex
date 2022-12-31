import { InputProps } from 'components/input/input';
import { Block, ValidatorController } from 'core';

export function withLiveValidator<P extends { inputs: InputProps[] }>(
  TargetClass: typeof Block
) {
  return class extends TargetClass<P> {
    constructor(props: P) {
      super(props);
      const validator = new ValidatorController(this, props.inputs, true);

      this.eventBus.on(ValidatorController.EVENTS.FORM_SUBMIT, () => {
        console.log('Ошибки: ', validator.errors);
        console.log('Данные: ', validator.values);
      });

      const { submitButton } = this.refs.formRef.refs;
      if (submitButton) {
        submitButton
          .getContent()
          .addEventListener('click', () =>
            this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT)
          );
      }
    }
  }
}
