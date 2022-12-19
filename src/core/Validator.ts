import { InputProps } from 'components/input/input';
import Block from './Block';

type ValidateRuleType = Values<typeof Validator.ValidateRules>;

export default class Validator {
  static ValidateRules = {
    LOGIN: 'login',
    PASSWORD: 'password',
    OLD_PASSWORD: 'oldPassword',
    NEW_PASSWORD: 'newPassword',
    PHONE: 'phone',
    EMAIL: 'email',
    FIRST_NAME: 'first_name',
    SECOND_NAME: 'second_name',
    DISPLAY_NAME: 'display_name',
  };
  static RE = {
    HAS_DIGIT_REGEX: /\d/,
    TEN_TO_FIFTEEN_DIGITS_REGEX: /^\d{10,15}$/,
    HAS_CAPITAL_REGEX: /[A-ZА-Я]/,
    HAS_LOWERCASE_REGEX: /[a-zа-я]/,
    EMAIL_REGEX:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    LATIN_DIGITS_DASH: /[^\d\w-]/,
    NOT_ONLY_DIGITS: /[\D]/,
    NAME_VALID: /^[А-ЯЁA-Z]{1}[a-zа-яё-]*$/,
  };
  static Messages = {
    EMPTY: 'поле не должно быть пустым',
    GREATER_THAN_3: 'поле должно быть не меньше 3 символов',
    GREATER_THAN_8: 'поле должно быть не меньше 8 символов',
    HAS_CAP_AND_DIGIT: 'должны быть как минимум одна цифра и заглавная буква',
    PASSWORDS_MATCH: 'пароли не должны совпадать',
    SHOULD_HAVE_CAPITAL: 'должна быть как минимум одна заглавная буква',
    SHOULD_HAVE_DIGIT: 'должна быть как минимум одна цифра',
    SHOULD_HAVE_LOWER: 'должна быть как минимум одна строчная буква',
    EMAIL_INVALID: 'введите валидный email',
    PHONE_INVALID: 'в телефоне должно быть от 10 до 15 цифр',
    LESS_THAN_40: 'не больше 40 символов',
    LOGIN_INVALID: 'цифры(но не только), латиница, "-" и "_"',
    NAME_INVALID: 'с большой буквы, без пробелов, допустим "-"',
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
      console.log(`ошибка в поле ${inputName}: `, error);
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
    const { RE, Messages, ValidateRules } = Validator;

    switch (ruleType) {
      // латиница или кириллица, первая буква должна быть заглавной,
      // без пробелов и без цифр, нет спецсимволов(допустим только дефис)
      // !DONE
      case ValidateRules.FIRST_NAME:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (!Validator.RE.NAME_VALID.test(value)) {
          errorMessage = Messages.NAME_INVALID;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      case ValidateRules.DISPLAY_NAME:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (!Validator.RE.NAME_VALID.test(value)) {
          errorMessage = Messages.NAME_INVALID;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      case ValidateRules.SECOND_NAME:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (!Validator.RE.NAME_VALID.test(value)) {
          errorMessage = Messages.NAME_INVALID;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;

      // от 3 до 20 символов, латиница, может содержать цифры,
      // но не состоять из них, без пробелов, без
      // спецсимволов(допустимы дефис и нижнее подчёркивание).
      // !DONE
      case ValidateRules.LOGIN:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (value.length < 3) {
          errorMessage = Messages.GREATER_THAN_3;
          break;
        }
        if (Validator.RE.LATIN_DIGITS_DASH.test(value)) {
          errorMessage = Messages.LOGIN_INVALID;
          break;
        }
        if (!Validator.RE.NOT_ONLY_DIGITS.test(value)) {
          errorMessage = Messages.LOGIN_INVALID;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра !DONE
      case ValidateRules.PASSWORD:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (value.length < 8) {
          errorMessage = Messages.GREATER_THAN_8;
          break;
        }
        if (
          !RE.HAS_DIGIT_REGEX.test(value) &&
          !RE.HAS_CAPITAL_REGEX.test(value)
        ) {
          errorMessage = Messages.HAS_CAP_AND_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_DIGIT_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_CAPITAL_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_CAPITAL;
          break;
        }
        if (!Validator.RE.HAS_LOWERCASE_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_LOWER;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      // Отличный от старого !DONE
      case ValidateRules.NEW_PASSWORD:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (value.length < 8) {
          errorMessage = Messages.GREATER_THAN_8;
          break;
        }
        if (
          !RE.HAS_DIGIT_REGEX.test(value) &&
          !RE.HAS_CAPITAL_REGEX.test(value)
        ) {
          errorMessage = Messages.HAS_CAP_AND_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_DIGIT_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_CAPITAL_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_CAPITAL;
          break;
        }
        if (!Validator.RE.HAS_LOWERCASE_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_LOWER;
          break;
        }
        if (value === this.block.state.values.oldPassword) {
          errorMessage = Messages.PASSWORDS_MATCH;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра. !DONE
      case ValidateRules.OLD_PASSWORD:
        if (value.length === 0) {
          errorMessage = Messages.EMPTY;
          break;
        }
        if (value.length < 8) {
          errorMessage = Messages.GREATER_THAN_8;
          break;
        }
        if (
          !RE.HAS_DIGIT_REGEX.test(value) &&
          !RE.HAS_CAPITAL_REGEX.test(value)
        ) {
          errorMessage = Messages.HAS_CAP_AND_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_DIGIT_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_DIGIT;
          break;
        }
        if (!Validator.RE.HAS_CAPITAL_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_CAPITAL;
          break;
        }
        if (!Validator.RE.HAS_LOWERCASE_REGEX.test(value)) {
          errorMessage = Messages.SHOULD_HAVE_LOWER;
          break;
        }
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;
      // валидная почта !DONE нагуглил-)
      case ValidateRules.EMAIL:
        if (!RE.EMAIL_REGEX.test(value)) {
          errorMessage = Messages.EMAIL_INVALID;
          break;
        }
        break;
      // от 10 до 15 символов, состоит из цифр !DONE
      case ValidateRules.PHONE:
        const digits = value.match(/\d/g);

        if (!digits || !RE.TEN_TO_FIFTEEN_DIGITS_REGEX.test(digits.join(''))) {
          errorMessage = Messages.PHONE_INVALID;
          break;
        }
        break;

      default:
        break;
    }

    return errorMessage;
  }
}
