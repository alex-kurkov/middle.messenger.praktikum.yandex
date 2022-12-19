import Block from '../../core/Block';
import template from 'bundle-text:./profile.hbs';
interface ProfileProps {
  sideMenuExpanded: boolean;
  feedEmpty: boolean;
}


export class Profile extends Block<ProfileProps> {
  render() {
    return template;
  }
}
