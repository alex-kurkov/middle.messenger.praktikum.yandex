import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';

interface MainPageProps {
  title: string;
  links: Array<{
    pageUrl: string;
    text: string;
    labelText?: string;
  }>;
}

export class Main extends Block<{}> {
  render() {
    return template;
  }
}
