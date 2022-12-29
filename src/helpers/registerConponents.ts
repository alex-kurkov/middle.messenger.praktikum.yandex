import { registerComponent } from 'core';
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
import ProfileEdit from 'components/profile-edit';
import ErrorComponent from 'components/error';
import ProfileEditData from 'components/profile-edit-data';
import ProfileEditPassword from 'components/profile-edit-password';
import Link from 'components/link';

export function registerAllComponents(): void {
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
  registerComponent(FeedMessage);
  registerComponent(ProfileEdit);
  registerComponent(ProfileEditData);
  registerComponent(ProfileEditPassword);
  registerComponent(Link);
}