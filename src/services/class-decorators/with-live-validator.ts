//@ts-nocheck
import { formSubmitController } from 'controllers/form-submit-controller';
import { ValidatorController } from 'core';

export function withLiveValidator<
  P extends { inputs: InputProps[]},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends { new (...args: any[]): object}
>(constructor: C) {
  return class extends constructor {
    constructor(props: P) {
      super(props);
      const validator = new ValidatorController(this, props.inputs, true);
      this.eventBus.on(ValidatorController.EVENTS.FORM_SUBMIT, () => {
        const form: HTMLFormElement =
          this.refs.formRef.getContent() as HTMLFormElement;
        formSubmitController.handleFormSubmit(form, validator);
      });
    }
  }
}
