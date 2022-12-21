import Block from 'core/Block';
import template from 'bundle-text:./notFound.hbs';

interface NotFoundPageProps {
  title: string;
  message: string;
  linkMessage: string;
  link: string;
}

export class NotFoundPage extends Block<NotFoundPageProps> {
  static componentName = 'NotFoundPage';

  render() {
    return template;
  }
}
