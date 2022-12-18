import { renderDOM, registerComponent } from './core';
import { OnboardingPage } from './pages/onb'
import { NotFoundPage } from './pages/NotFound';

import './app.css';

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);

const newP = new NotFoundPage({
  title: '400',
  message: 'eorhvoewrvewov',
  linkMessage: 'Главную',
  link: '/',
});

console.log(newP)

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', newP);
});
