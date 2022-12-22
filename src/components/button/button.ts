import Block from 'core/Block';
import template from 'bundle-text:./button.hbs';

import './button.css';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export class Button extends Block<Pick<ButtonProps, 'text'> & BlockEvents> {
  static componentName = 'Button';

  constructor({ text, onClick }: ButtonProps) {
    super({ text, events: { click: onClick } });
  }

  protected render(): string {
    return template;
  }
}
