import './app.css';
import { renderDOM, registerComponent, Block } from 'core';
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
import NotFoundPage from 'pages/NotFound';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Messenger from 'pages/Messenger';
import Profile from 'pages/Profile';
import ErrorComponent from 'components/error';
import profileEditData from 'components/profile-edit-data';
import profileEditPassword from 'components/profile-edit-password';
import props from './mock-data/pages-props';

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
registerComponent(profileEditData);
registerComponent(profileEditPassword);

const Page400 = new NotFoundPage(props.page400);
const Page500 = new NotFoundPage(props.page500);
const MainPage = new Main(props.mainPage);
const LoginPage = new Login(props.loginPage);
const RegisterPage = new Login(props.registerPage);
const MessengerPage = new Messenger(props.messengerNarrow);
const MessengerPageExpanded = new Messenger(props.messengerExpanded);
const ProfilePage = new Profile({ ...props.profile, mainView: true });
const ProfilePageEditPassword = new Profile({
  ...props.profile,
  passwordView: true,
});
const ProfilePageEditData = new Profile({ ...props.profile, dataView: true });

const mockRouter = () => {
  let page: Nullable<Block<object>> = null;
  // eslint-disable-next-line no-restricted-globals
  const { hash } = location;

  switch (hash) {
    case '':
      page = MainPage;
      break;
    case '#400':
      page = Page400;
      break;
    case '#500':
      page = Page500;
      break;
    case '#login':
      page = LoginPage;
      break;
    case '#register':
      page = RegisterPage;
      break;
    case '#messenger':
      page = MessengerPageExpanded;
      break;
    case '#messenger-narrow':
      page = MessengerPage;
      break;
    case '#profile':
      page = ProfilePage;
      break;
    case '#profile-password':
      page = ProfilePageEditPassword;
      break;
    case '#profile-data':
      page = ProfilePageEditData;
      break;
    default:
      page = Page400;
  }
  if (page instanceof Block) {
    renderDOM('#app', page);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  mockRouter();
  window.addEventListener('hashchange', mockRouter);

  const el = document.querySelector('.feed__messages-feed');
  if (el?.lastElementChild) {
    el.lastElementChild.scrollIntoView();
  }
});
