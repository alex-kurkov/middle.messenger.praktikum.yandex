import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface NotFoundPageProps {
  title: string;
  message: string;
  linkMessage: string;
  link: string;
}

export class NotFoundPage extends Block<{}> {
  constructor(props: NotFoundPageProps) {
    super({ ...props });
  }

  render() {
    return template;
  }
}
