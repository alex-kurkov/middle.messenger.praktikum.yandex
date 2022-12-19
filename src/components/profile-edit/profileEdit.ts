import Block from "core/Block";
import './profileEdit.css';
import template from 'bundle-text:./profileEdit.hbs';

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
