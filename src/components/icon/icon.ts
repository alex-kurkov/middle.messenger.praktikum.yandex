import { Block } from "../../core";
import './style.css';
import addPerson from 'bundle-text:./add-person.hbs';
import avatarEdit from 'bundle-text:./avatar-edit.hbs';
import chatSettings from 'bundle-text:./chat_settings.hbs';
import expand from 'bundle-text:./expand.hbs';
import clip from 'bundle-text:./clip.hbs';
import close from 'bundle-text:./close.hbs';
import search from 'bundle-text:./search.hbs';
import send from 'bundle-text:./send.hbs';
import settings from 'bundle-text:./settings.hbs';
import sound from 'bundle-text:./sound.hbs';

enum IconTypes {
  'close',
  'addPerson',
  'avatarEdit',
  'clip',
  'chatSettings',
  'expand',
  'search',
  'send',
  'settings',
  'sound',
}

interface IconProps {
  type: IconTypes;
  onClick?: () => void;
}

export class Icon extends Block {
  constructor({ type, onClick }: IconProps) {
    super({ type, events: { click: onClick } });
  }

  render() {
    switch (this.props.type) {
      case 'close':
        return close;
      case 'clip':
        return clip;
      case 'addPerson':
        return addPerson;
      case 'avatarEdit':
        return avatarEdit;
      case 'chatSettings':
        return chatSettings;
      case 'expand':
        return expand;
      case 'send':
        return send;
      case 'search':
        return search;
      case 'settings':
        return settings;
      case 'sound':
        return sound;
      default:
        return close;
    }
  }
}
