import { formSubmitController } from 'controllers/form-submit-controller';
import { Block, ValidatorController } from 'core';

export function withLiveValidator<P extends { inputs: InputProps[] }>(
  TargetClass: typeof Block
) {
  return class extends TargetClass<P> {
    constructor(props: P) {
      super(props);
      const validator = new ValidatorController(this, props.inputs, true);

      this.eventBus.on(ValidatorController.EVENTS.FORM_SUBMIT, () => {
        const form: HTMLFormElement =
          this.refs.formRef.getContent() as HTMLFormElement;
        formSubmitController.handleFormSubmit(form, validator);
      });
    }
  };
}
