import Block from "core/Block";
import './feed.css';
import template from 'bundle-text:./feed.hbs';
import ValidatorController from "core/ValidatorController";
import { InputProps } from "components/input/input";
interface FeedProps {
  inputs: InputProps[];
  empty: boolean;
  chatMessages: any[];
}
export class Feed extends Block<FeedProps> {
  constructor(props: FeedProps) {
    super(props);

    const validator = new ValidatorController(this, props.inputs, false);
    validator.init();

    this.eventBus.on(Block.EVENTS.FORM_SUBMIT, () =>
      console.log(validator.errors)
    );

    const submitButton = this.refs?.submitButton;
    
    if (submitButton) {
      submitButton
        .getContent()
        .addEventListener('click', () =>
          this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)
        );
    }
  }

  render() {
    return template;
  }
}
