import Block from 'core/Block';
import template from 'bundle-text:./link.hbs';
import router from 'controllers/router';
import './link.css';

interface LinkProps {
  text?: string;
  to: string;
}

export class Link extends Block<Pick<LinkProps, 'text'> & BlockEvents> {
  static componentName = 'Link';

  constructor({ text, to }: LinkProps) {
    super({
      text,
      events: {
        click: () => {
          router.go(to);
        },
      },
    });
  }

  protected render(): string {
    return template;
  }
}
