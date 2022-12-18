import { Block } from '../../core';
import './style.css';
import template from 'bundle-text:./template.hbs';

interface FormAddonProps {
  text?: string;
  link?: string;
  linkText?: string;
}

export class FormAddon extends Block<{}> {
  render() {
    return template;
  }
}
