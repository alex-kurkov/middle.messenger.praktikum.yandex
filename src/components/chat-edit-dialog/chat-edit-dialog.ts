import Block from 'core/Block';
import './chat-edit-dialog.css';
import template from 'bundle-text:./chat-edit-dialog.hbs';
import { withActiveChat, withEditChatDialog } from 'services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';
import { activeChatController } from 'controllers/active-chat-controller';

 @withEditChatDialog
 @withActiveChat
 export class ChatEditDialog<P extends {chat: MSNChat}> extends Block<P> {
   static componentName = 'ChatEditDialog';
   constructor(props: P) {
     super({
       ...props,
       closeDialog: () => {
         interfaceController.hideEditChatDialog();
       },
       handleAvatarChange: () => {
         console.log('handleAvatarChange');
       },
       handleNewChatClick: () => {
         console.log('handleNewChatClick');
       },
       handleChatDelete: () => {
         activeChatController.deleteActiveChat(props.chat.id);
       },
     });
   }

   componentDidMount(): void {
     this.setProps({
       abbr: this.props.chat?.title?.charAt(0).toUpperCase(),
     });
   }
   render() {
     return template;
   }
 }
