import template from 'bundle-text:./formAddon.hbs';
import { Block } from '../../core';
import './formAddon.css';

interface FormAddonProps {
  text?: string;
  link?: string;
  linkText?: string;
}

export class FormAddon extends Block<FormAddonProps> {
  static componentName = 'FormAddon';

  render() {
    return template;
  }
}
