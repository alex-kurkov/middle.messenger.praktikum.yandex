import { InputProps } from 'components/input/input';
import Block from './Block';
import Validator, { ValidateRuleType } from './Validator';

export default class ValidatorController<P extends {}> extends Validator {
  
  block: Block<P>;
  controlledInputs: InputProps[];

  constructor(block: Block<P>, inputs: InputProps[]) {
    super();
    this.block = block;
    this.controlledInputs = this.enrichInputs(inputs);
    this.registerListeners();
  }

  init() {
    this.block.setProps({
      inputs: this.controlledInputs,
    });

    const state = this.controlledInputs.reduce(
      (state, input) => {
        const value: string = input.value ? input.value : '';
        const error: string = this.validate(input.name!, value);
        return {
          errors: {
            ...state.errors,
            [input.name!]: error,
          },
          values: {
            ...state.values,
            [input.name!]: value,
          },
        };
      },
      { errors: {}, values: {} }
    );

    this.block.setState(state);
  }

  enrichInputs(inputs: InputProps[]): InputProps[] {
    return inputs.map((input) => {
      return {
        ...input,
        onBlur: (e: InputEvent) =>
          this.block.eventBus.emit(Block.EVENTS.INPUT_BLURRED, e!.target!),
        onChange: (e: InputEvent) =>
          this.block.eventBus.emit(Block.EVENTS.INPUT_CHANGED, e!.target!),
        onFocus: (e: InputEvent) =>
          this.block.eventBus.emit(Block.EVENTS.INPUT_FOCUSED, e!.target!),
      };
    });
  }

  get inputs() {
    return this.controlledInputs;
  }

  get errors() {
    return this.block.state.errors;
  }

  get hasErrors() {
    const errorsArr: string[] = Array.from(
      Object.values(this.block.state.errors)
    );
    return errorsArr.some((error: string) => error.length);
  }

  renderErrorText(inputName: ValidateRuleType, error: string): void {
    const inputRef = inputName + '_inputRef';
    this.block.refs.formRef.refs[inputRef].refs.error.setProps({
      error,
    });
  }

  handleFormChange(target: HTMLInputElement): void {
    const inputName: ValidateRuleType = target.name as ValidateRuleType;
    const error = this.validate(inputName, target.value);
    this.block.state.errors[inputName] = error;
    this.block.state.values[inputName] = target.value;

    this.renderErrorText(inputName, error);
  }
  handleInputBlur(target: HTMLInputElement) {
    const inputName: ValidateRuleType = target.name as ValidateRuleType;
    this.renderErrorText(inputName, '');
    console.log('catch eventBus input blur');
  }
  handleInputFocus(target: HTMLInputElement) {
    const inputName: ValidateRuleType = target.name as ValidateRuleType;
    const error = this.validate(inputName, target.value);
    this.block.state.errors[inputName] = error;
    this.block.state.values[inputName] = target.value;

    this.renderErrorText(inputName, error);
  }

  registerListeners() {
    this.block.eventBus.on(
      Block.EVENTS.INPUT_CHANGED,
      this.handleFormChange.bind(this)
    );
    this.block.eventBus.on(
      Block.EVENTS.INPUT_BLURRED,
      this.handleInputBlur.bind(this)
    );
    this.block.eventBus.on(
      Block.EVENTS.INPUT_FOCUSED,
      this.handleInputFocus.bind(this)
    );
  }

  validate(ruleType: ValidateRuleType, value: string): string {
    let errorMessage = super.validate(ruleType, value);

    const { Messages, ValidateRules } = Validator;

    if (
      !(ruleType === ValidateRules.NEW_PASSWORD || ruleType === ValidateRules.REPEAT_PASSWORD) ||
      errorMessage.length
    ) {
      return errorMessage;
    }

    switch (ruleType) {
      // ------------------------
      // Отличный от старого
      // ------------------------
      case ValidateRules.NEW_PASSWORD:
        if (value === this.block.state.values.oldPassword) {
          errorMessage = Messages.PASSWORDS_SHOULD_NOT_MATCH;
          break;
        }
        break;

      // ------------------------
      // Такой же, как и password
      // ------------------------
      case ValidateRules.REPEAT_PASSWORD:
        if (value !== this.block.state.values.password) {
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
