import Block from "core/Block";
import Validator from "core/Validator";
import './profileEditPassword.css';
import template from 'bundle-text:./profileEditPassword.hbs';
import { InputProps } from "components/input/input";

interface ProfileEditProps {
  formTitle?: string;
  inputs: InputProps[];
}

export class ProfileEditPassword extends Block<Omit<ProfileEditProps, 'inputs'>> {
  constructor({ formTitle, inputs }: ProfileEditProps) {
    super({ formTitle });
    const validator = new Validator(this, inputs);
    validator.init();
  }
  render() {
    return template;
  }
}
