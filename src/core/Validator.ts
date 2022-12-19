import { InputProps } from 'components/input/input';
import Block from './Block';

export type ValidateRuleType = Values<typeof Validator.ValidateRules>

export default class Validator {
  static ValidateRules = {
    LOGIN: 'login',
    PASSWORD: 'password',
  };
  block: Block<{}>;
  controlledInputs: InputProps[];

  constructor(block: Block<{}>, inputs: InputProps[]) {
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
        return {
          errors: {
            ...state.errors,
            [input.name!]: '',
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
          this.block.eventBus.emit('form:input-blur-occured', e!.target!),
        onChange: (e: InputEvent) =>
          this.block.eventBus.emit('form:input-event-occured', e!.target!),
        onFocus: (e: InputEvent) =>
          this.block.eventBus.emit('form:input-focus-occured', e!.target!),
      };
    });
  }

  get inputs() {
    return this.controlledInputs;
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
    if (error.length) {
      console.log(`ошибка в поле: ${inputName}: `, error);
    }
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
    if (error.length) {
      console.log(`ошибка в поле: ${inputName}: `, error);
    }
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
    let errorMessage = '';

    switch (ruleType) {
      case Validator.ValidateRules.LOGIN:
        if (value.length === 0) {
          errorMessage = 'Поле не должно быть пустым.';
          break;
        }
        if (value.length < 4) {
          errorMessage = 'Поле должно быть не меньше 5 символов.';
          break;
        }

      case Validator.ValidateRules.PASSWORD:
        if (value.length === 0) {
          errorMessage = 'Поле не должно быть пустым.';
          break;
        }
        if (value.length < 4) {
          errorMessage = 'Поле должно быть не меньше 5 символов.';
          break;
        }

      default:
        break;
    }

    return errorMessage;
  }
}
