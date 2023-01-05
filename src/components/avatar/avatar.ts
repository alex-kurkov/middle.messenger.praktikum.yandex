import Block from 'core/Block';
import './avatar.css';
import template from 'bundle-text:./avatar.hbs';
import { withUser } from '../../services/class-decorators/store-connectors';
import { abbreviate } from '../../utils/abbreviate';

@withUser
export default class Avatar<P extends {user: MSNUser}> extends Block<P> {
  static componentName = 'Avatar';

  constructor(props: P) {
    super({...props, abbr: abbreviate(props.user)})
  }
  render() {
    return template;
  }
}
