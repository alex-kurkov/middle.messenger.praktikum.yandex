import { Block } from "../../core";
import './style.css';
import template from 'bundle-text:./template.hbs';

export class Form extends Block<{}> {
  render() {
    return template;
  }
}