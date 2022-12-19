import { Block } from '../../core';
import './formAddon.css';
import template from 'bundle-text:./formAddon.hbs';

interface FormAddonProps {
  text?: string;
  link?: string;
  linkText?: string;
}

export class FormAddon extends Block<{}> {
  constructor(p: FormAddonProps) {
    super(p);
  }
  render() {
    return template;
  }
}
