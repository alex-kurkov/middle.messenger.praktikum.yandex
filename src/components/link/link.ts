import Block from 'core/Block';
import template from 'bundle-text:./link.hbs';
import router from 'controllers/router';
import './link.css';

interface LinkProps {
  text?: string;
  to?: string;
  onClick?: () => void;
}

export class Link extends Block<Pick<LinkProps, 'text' | 'to' > & BlockEvents> {
  static componentName = 'Link';

  constructor({ text, to }: LinkProps) {
    super({
      text,
      events: {
        click: (e?: MouseEvent) => {
          e?.preventDefault();
          if (to) {
            router.go(to);
          }
        },
      },
    });
  }

  protected render(): string {
    return template;
  }
}
