import Block from 'core/Block';
import template from 'bundle-text:./notFound.hbs';

interface NotFoundPageProps {
  title: string;
  message: string;
  linkMessage: string;
  link: string;
}

export class NotFoundPage extends Block<NotFoundPageProps> {
  constructor(props: NotFoundPageProps) {
    super({ ...props });
  }

  render() {
    return template;
  }
}
