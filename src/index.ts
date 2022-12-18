import './app.css';
import { renderDOM, registerComponent, Block } from './core';
import { NotFoundPage } from './pages/NotFound';
import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import { Layout } from './components/layout';
import props from './mock-data/pages-props';
import { Main } from './pages/Main';
import { Modal } from './components/modal';
import { Icon } from './components/icon';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);
registerComponent(Modal);
registerComponent(Icon);

const Page400 = new NotFoundPage(props.page400);
const Page500 = new NotFoundPage(props.page500);
const MainPage = new Main(props.mainPage);

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


