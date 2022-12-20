export type ValidateRuleType = Values<typeof Validator.ValidateRules>;

export default class Validator {
  static ValidateRules = {
    LOGIN: 'login',
    PASSWORD: 'password',
    OLD_PASSWORD: 'oldPassword',
    NEW_PASSWORD: 'newPassword',
    REPEAT_PASSWORD: 'repeat_password',
    PHONE: 'phone',
    EMAIL: 'email',
    FIRST_NAME: 'first_name',
    SECOND_NAME: 'second_name',
    DISPLAY_NAME: 'display_name',
    MESSAGE: 'message',
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
    PASSWORDS_SHOULD_NOT_MATCH: 'пароли не должны совпадать',
    PASSWORDS_SHOULD_MATCH: 'пароли должны совпадать',
    SHOULD_HAVE_CAPITAL: 'должна быть как минимум одна заглавная буква',
    SHOULD_HAVE_DIGIT: 'должна быть как минимум одна цифра',
    SHOULD_HAVE_LOWER: 'должна быть как минимум одна строчная буква',
    EMAIL_INVALID: 'введите валидный email',
    PHONE_INVALID: 'в телефоне должно быть от 10 до 15 цифр',
    LESS_THAN_40: 'не больше 40 символов',
    LOGIN_INVALID: 'цифры(но не только), латиница, "-" и "_"',
    NAME_INVALID: 'с большой буквы, без пробелов, допустим "-"',
    MESSAGE_NOT_EMPTY: 'сообщение должно состоять как минимум из 1 символа...',
  };

  constructor() {}

  validate(ruleType: ValidateRuleType, value: string): string {
    let errorMessage = '';
    const { RE, Messages, ValidateRules } = Validator;

    switch (ruleType) {
      // ------------------------
      // латиница или кириллица, первая буква должна быть заглавной,
      // без пробелов и без цифр, нет спецсимволов(допустим только дефис)
      // ------------------------
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

      // ------------------------
      // от 3 до 20 символов, латиница, может содержать цифры,
      // но не состоять из них, без пробелов, без
      // спецсимволов(допустимы дефис и нижнее подчёркивание).
      // ------------------------
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

      // ------------------------
      // от 8 до 40 символов, обязательно хотя бы одна заглавная
      // буква и цифра!DONE
      // ------------------------
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

      // ------------------------
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      // ------------------------
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
        if (value.length > 40) {
          errorMessage = Messages.LESS_THAN_40;
          break;
        }
        break;

      // ------------------------
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      // ------------------------
      case ValidateRules.REPEAT_PASSWORD:
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

      // ------------------------
      // от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      // ------------------------
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

      // ------------------------
      // валидная почта
      // ------------------------
      case ValidateRules.EMAIL:
        if (!RE.EMAIL_REGEX.test(value)) {
          errorMessage = Messages.EMAIL_INVALID;
          break;
        }
        break;

      // ------------------------
      // от 10 до 15 символов, состоит из цифр
      // ------------------------
      case ValidateRules.PHONE:
        const digits = value.match(/\d/g);

        if (!digits || !RE.TEN_TO_FIFTEEN_DIGITS_REGEX.test(digits.join(''))) {
          errorMessage = Messages.PHONE_INVALID;
          break;
        }
        break;
      
      // ------------------------
      // от 10 до 15 символов, состоит из цифр
      // ------------------------
      case ValidateRules.MESSAGE:

        if (!value.length) {
          errorMessage = Messages.MESSAGE_NOT_EMPTY;
          break;
        }
        break;

      default:
        break;
    }

    return errorMessage;
  }
}
