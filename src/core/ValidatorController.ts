import Block from './Block';
import Validator from './Validator';

interface State {
  errors: Record<string, string>;
  values: Record<string, string>;
}

export default class ValidatorController extends Validator {
  static EVENTS = {
    INPUT_CHANGED: 'form:input-event-did-change',
    INPUT_BLURRED: 'form:input-blur-did-blur',
    INPUT_FOCUSED: 'form:input-focus-did-focus',
    FORM_SUBMIT: 'form:did-submit',
  };

  renderErrors = false;

  private block: Block<object>;

  state: State = {
    errors: {},
    values: {},
  };

  controlledInputs: InputProps[];

  constructor(
    block: Block<object>,
    inputs: InputProps[],
    renderErrors: boolean
  ) {
    super();
    this.block = block;
    this.renderErrors = renderErrors;
    this.controlledInputs = this.enrichInputs(inputs);
    this.registerListeners();
    this.init();
  }

  init() {
    this.block.setProps({
      inputs: this.controlledInputs,
    });

    const newState: State = this.controlledInputs.reduce(
      (state, input) => {
        const value: string = input.value ? input.value : '';
        const error: string = this.validate(input.name, value);
        return {
          errors: {
            ...state.errors,
            [input.name]: error,
          },
          values: {
            ...state.values,
            [input.name]: value,
          },
        };
      },
      { errors: {}, values: {} }
    );

    this.state = newState;
  }

  enrichInputs(inputs: InputProps[]): InputProps[] {
    return inputs.map((input) => ({
      ...input,
      onBlur: (e: InputEvent) =>
        this.block.eventBus.emit(ValidatorController.EVENTS.INPUT_BLURRED, e.target),
      onChange: (e: InputEvent) =>
        this.block.eventBus.emit(ValidatorController.EVENTS.INPUT_CHANGED, e.target),
      onFocus: (e: InputEvent) =>
        this.block.eventBus.emit(ValidatorController.EVENTS.INPUT_FOCUSED, e.target),
    }));
  }

  get inputs() {
    return this.controlledInputs;
  }

  get errors() {
    return this.state.errors;
  }

  get values() {
    return this.state.values;
  }

  get hasErrors() {
    const errorsArr: string[] = Array.from(Object.values(this.state.errors));
    return errorsArr.some((error: string) => error.length);
  }

  showAllErrors() {
    const errors: Array<[string, string]>= Array.from(Object.entries(this.state.errors));
    errors.forEach(([e, text]) => this.renderErrorText(e, text));
  }

  renderErrorText(inputName: string, error: string): void {
    if (!this.renderErrors) {
      return;
    }
    const inputRef = `${inputName}_inputRef`;
    this.block.refs.formRef.refs[inputRef]?.refs?.error?.setProps({
      error,
    });
  }

  handleFormChange(target: HTMLInputElement): void {
    const inputName: string = target.name;
    const error = this.validate(inputName, target.value);
    this.state.errors[inputName] = error;
    this.state.values[inputName] = target.value;

    this.renderErrorText(inputName, error);
  }

  handleInputBlur(target: HTMLInputElement) {
    const inputName: string = target.name;
    this.renderErrorText(inputName, '');
    console.log('catch eventBus input blur');
  }

  handleInputFocus = (target: HTMLInputElement) => {
    const inputName: string = target.name;
    const error = this.validate(inputName, target.value);
    this.state.errors[inputName] = error;
    this.state.values[inputName] = target.value;

    this.renderErrorText(inputName, error);
  };

  registerListeners() {
    this.block.eventBus.on(
      ValidatorController.EVENTS.INPUT_CHANGED,
      this.handleFormChange.bind(this) as () => void
    );
    this.block.eventBus.on(
      ValidatorController.EVENTS.INPUT_BLURRED,
      this.handleInputBlur.bind(this) as () => void
    );
    this.block.eventBus.on(
      ValidatorController.EVENTS.INPUT_FOCUSED,
      this.handleInputFocus.bind(this) as () => void
    );
  }

  validate(ruleType: string, value: string): string {
    let errorMessage = super.validate(ruleType, value);

    const { Messages, ValidateRules } = Validator;

    if (
      !(
        ruleType === ValidateRules.NEW_PASSWORD ||
        ruleType === ValidateRules.REPEAT_PASSWORD
      ) ||
      errorMessage.length
    ) {
      return errorMessage;
    }

    switch (ruleType) {
      // ------------------------
      // Отличный от старого
      // ------------------------
      case ValidateRules.NEW_PASSWORD:
        if (value === this.state.values.oldPassword) {
          errorMessage = Messages.PASSWORDS_SHOULD_NOT_MATCH;
          break;
        }
        break;

      // ------------------------
      // Такой же, как и password
      // ------------------------
      case ValidateRules.REPEAT_PASSWORD:
        if (value !== this.state.values.password) {
          errorMessage = Messages.PASSWORDS_SHOULD_MATCH;
          break;
        }
        break;
      default:
        break;
    }

    return errorMessage;
  }
}
