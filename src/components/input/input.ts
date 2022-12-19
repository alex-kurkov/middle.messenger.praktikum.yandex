import Block from 'core/Block';
import template from 'bundle-text:./input.hbs';
import './input.css';

export interface InputProps {
  onChange?: (e: InputEvent) => void;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: Nullable<string>;
  error?: Nullable<string>;
  autocomplete?: string;
  accept?: 'string';
  class?: string;
  required?: boolean;
  id?: string;
  labelText?: string;
  ref?: string;
  errorRef?: string;
}

export class Input extends Block<{}> {
  constructor({onChange, onFocus, onBlur, ...props }: InputProps) {
    super({...props, events: {
      input: onChange,
      focus: onFocus,
      blur: onBlur,
    }});
  }

  protected render(): string {
    return template;
  }
}
