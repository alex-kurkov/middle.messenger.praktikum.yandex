import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface NotFoundPageProps {
  title: string;
  message: string;
  linkMessage: string;
  link: string;
}

const buttons = [
  {
    text: 'ONE',
    onButtonClick: (e: Event) => console.log("fiiiiiiiiiiiirst"),
  },
  {
    text: 'Two',
    onButtonClick: (e: Event) => console.log(e.target),
  },
];

export class NotFoundPage extends Block {
  constructor(props: NotFoundPageProps) {
    super({ ...props, buttons });
  }

  render() {
    return template;
  }
}
