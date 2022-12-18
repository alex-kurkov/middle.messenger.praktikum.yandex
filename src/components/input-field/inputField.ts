import { Block } from "../../core";
import './style.css';
import template from 'bundle-text:./template.hbs';

export class InputField extends Block<{}> {
  render() {
    return template;
  }
}
