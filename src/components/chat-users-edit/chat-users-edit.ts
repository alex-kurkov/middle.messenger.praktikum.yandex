import Block from 'core/Block';
import './chat-users-edit.css';
import template from 'bundle-text:./chat-users-edit.hbs';
import {
  withChatUsersEditVisible,
} from 'services/class-decorators/store-connectors';

 @withChatUsersEditVisible
 export class ChatUsersEdit<P extends { users: MSNUser[] }> extends Block<P> {
   static componentName = 'ChatUsersEdit';
   
  constructor(props: P) {
    super({
      ...props,
    });
   }

   render() {
     return template;
   }
 }
