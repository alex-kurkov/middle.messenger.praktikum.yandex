import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import './style.css';

export interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email' | 'button';
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
  autocomplete?: 'off' | 'on';
  accept?: 'string';
  class?: string;
  required?: boolean;
  uuid?: boolean;
}

export class Input extends Block<{}> {
  constructor({onChange, ...props }: InputProps) {
    super({...props, events: {input: onChange}});
  }

  protected render(): string {
    return template;
  }
}
