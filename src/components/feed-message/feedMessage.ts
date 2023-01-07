import Block from 'core/Block';
import template from 'bundle-text:./feedMessage.hbs';
import './feedMessage.css';
import {
  withOwnId,
} from 'services/class-decorators/store-connectors';

@withOwnId
export class FeedMessage<P extends MSNChatMessage & {ownId: number}> extends Block<P> {
  static componentName = 'FeedMessage';
  constructor(props: P) {
  super({
    ...props,
    isOwn: props.ownId === props.user?.id
  })
}

  render() {
    return template;
  }
}
