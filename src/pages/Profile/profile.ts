import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface ProfileProps {

}


export class Profile extends Block<{}> {
  render() {
    return template;
  }
}
