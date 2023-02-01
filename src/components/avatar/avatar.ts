import Block from 'core/Block';
import './avatar.css';
import template from './avatar.hbs';
import { getStaticFilePath } from 'utils/getStaticFilePath';

export class Avatar<P extends {
  abbr: string, avatar: Nullable<string>, size: string
}> extends Block<P> {
  static componentName = 'Avatar';

  constructor(props: P) {
    const fullAvatarPath = getStaticFilePath(props.avatar);
    super({
      ...props,
      size: props.size,
      abbr: props.abbr?.charAt(0)?.toUpperCase(),
      avatar: fullAvatarPath,
    });
  }

  render() {
    return template;
  }
}
