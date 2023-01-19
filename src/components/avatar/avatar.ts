import Block from 'core/Block';
import './avatar.css';
import template from 'bundle-text:./avatar.hbs';
import { getStaticFilePath } from 'utils/getStaticFilePath';

export default class Avatar<P extends {abbr: string, avatar: Nullable<string>}> extends Block<P> {
  static componentName = 'Avatar';


  constructor(props: P) {
    const fullAvatarPath = getStaticFilePath(props.avatar);
    super({
      ...props,
      abbr: props.abbr?.charAt(0)?.toUpperCase(),
      avatar: fullAvatarPath,
    });
  }

  render() {
    return template;
  }
}
