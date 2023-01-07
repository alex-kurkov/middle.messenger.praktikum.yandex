import Block from 'core/Block';
import './chat-users-edit.css';
import template from 'bundle-text:./chat-users-edit.hbs';
import {
  withActiveChatUsers,
  withChatUsersEditVisible,
} from 'services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';

@withActiveChatUsers @withChatUsersEditVisible
 export class ChatUsersEdit<P extends { chat: MSNChat }> extends Block<P> {
   static componentName = 'ChatUsersEdit';
   constructor(props: P) {
     super({
       ...props,
       showUsers: () => {
         interfaceController.showChatUsersEdit()
       },
     });
   }

   render() {
     return template;
   }
 }
