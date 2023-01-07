import { registerComponent } from 'core';
import Avatar from 'components/avatar/avatar';
import Button from 'components/button';
import Input from 'components/input';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Icon from 'components/icon';
import Form from 'components/form';
import FormAddon from 'components/form-addon';
import SideMenu from 'components/side-menu';
import MenuMessage from 'components/menu-message';
import Feed from 'components/feed';
import FeedMessage from 'components/feed-message';
import InputField from 'components/input-field';
import ErrorComponent from 'components/error';
import Link from 'components/link';
import FeedTitle from 'components/feed-title';
import ChatMessagesList from 'components/chat-messages-list';
import NewMessage from 'components/new-message/new-message';
import ProfileContent from 'components/profile-content';
import ProfileEditPassword from 'components/profile-edit-password';
import ProfileEditData from 'components/profile-edit-data';
import ChatAddDialog from 'components/chat-add-dialog';
import ChatEditDialog from 'components/chat-edit-dialog';

export function registerAllComponents(): void {
  registerComponent(Avatar);
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(InputField);
  registerComponent(Layout);
  registerComponent(Modal);
  registerComponent(ErrorComponent);
  registerComponent(Icon);
  registerComponent(Form);
  registerComponent(FormAddon);
  registerComponent(SideMenu);
  registerComponent(MenuMessage);
  registerComponent(Feed);
  registerComponent(FeedTitle);
  registerComponent(FeedMessage);
  registerComponent(ChatMessagesList);
  registerComponent(NewMessage);
  registerComponent(Link);
  registerComponent(ProfileContent);
  registerComponent(ProfileEditPassword);
  registerComponent(ProfileEditData);
  registerComponent(ChatAddDialog);
  registerComponent(ChatEditDialog);
}
