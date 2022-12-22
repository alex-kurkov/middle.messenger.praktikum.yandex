import Block from 'core/Block';
import template from 'bundle-text:./main.hbs';

interface MainPageProps {
  title: string;
  links: {
    pageUrl: string;
    text: string;
    labelText?: Nullable<string>;
  }[];
}

export class Main extends Block<MainPageProps> {
  static componentName = 'Main';

  render() {
    return template;
  }
}
