import Block from 'core/Block';
import template from 'bundle-text:./button.hbs';

import './button.css';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  refName?: string;
}

export class Button extends Block<
  Pick<ButtonProps, 'text' | 'refName'> & BlockEvents
> {
  static componentName = 'Button';

  constructor({ text, refName, onClick }: ButtonProps) {
    super({ text, refName, events: { click: onClick } });
  }

  protected render(): string {
    return template;
  }
}
