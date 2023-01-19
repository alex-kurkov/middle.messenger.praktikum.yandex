import Block from 'core/Block';
import template from 'bundle-text:./input.hbs';
import './input.css';

export class Input extends Block<
  Omit<InputProps, 'onChange' | 'onFocus' | 'onBlur' > &
    BlockEvents
> {
  static componentName = 'Input';

  constructor({
    onChange,
    onFocus,
    onBlur,
    ...props
  }: InputProps) {
    super({
      ...props,
      events: {
        input: onChange,
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  protected render(): string {
    return template;
  }
}
