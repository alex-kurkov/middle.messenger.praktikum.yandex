import Block from "core/Block";
import Validator from "core/Validator";
import { InputProps } from "components/input/input";
import './profileEditData.css';
import template from 'bundle-text:./profileEditData.hbs';

interface ProfileEditProps {
  inputs: InputProps[];
}

export class ProfileEditData extends Block<{}> {
  constructor({ inputs, ...props }: ProfileEditProps) {
    super(props);
    const validator = new Validator(this, inputs);
    validator.init();
  }
  render() {
    return template;
  }
}
