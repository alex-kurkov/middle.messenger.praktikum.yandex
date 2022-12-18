import './app.css';
import { renderDOM, registerComponent, Block } from './core';
import props from './mock-data/pages-props';
import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';
import Modal from './components/modal';
import Icon from './components/icon';
import Form from './components/form';
import NotFoundPage from './pages/NotFound';
import InputField from './components/input-field';
import Main from './pages/Main';
import Login from './pages/Login';
import FormAddon from './components/form-addon';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(InputField);
registerComponent(Layout);
registerComponent(Modal);
registerComponent(Icon);
registerComponent(Form);
registerComponent(FormAddon);

const Page400 = new NotFoundPage(props.page400);
const Page500 = new NotFoundPage(props.page500);
const MainPage = new Main(props.mainPage);
const LoginPage = new Login(props.loginPage);
const RegisterPage = new Login(props.registerPage);

const mockRouter = () => {
  let page: Nullable<Block<{}>> = null;
  const path = location.pathname;

  switch (path) {
    case '/':
      page = MainPage;
      break;
    case '/400':
      page = Page400;
      break;
    case '/500':
      page = Page500;
      break;
    case '/login':
      page = LoginPage;
      break;
    case '/register':
      page = RegisterPage;
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
});


