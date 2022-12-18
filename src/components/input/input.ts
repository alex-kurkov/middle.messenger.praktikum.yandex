import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import './style.css';

export interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email' | 'button';
  placeholder?: string;
  value?: string;
  error?: string;
  autocomplete?: 'off' | 'on';
  accept?: 'string';
  class?: string;
  required?: boolean;
}

export class Input extends Block<{}> {
  constructor({onChange = () => {}, type = 'text', error, placeholder, value}: InputProps) {
    super({type, placeholder, value, error, events: {input: onChange}});
  }

  protected render(): string {
    return template;
    return `
      <div class="input">
        <input class="input__input" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `
  }
}
