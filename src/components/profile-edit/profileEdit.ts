import { Block } from "../../core";
import './style.css';
import template from 'bundle-text:./template.hbs';

interface ProfileEditProps {
  mainView: boolean;
  passwordView: boolean;
  dataView: boolean;
}

export class ProfileEdit extends Block<{}> {
  constructor(props: ProfileEditProps) {
    super({ ...props });
  }
  render() {
    return template;
  }
}
