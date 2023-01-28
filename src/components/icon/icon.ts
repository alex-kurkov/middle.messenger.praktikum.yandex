import Block from 'core/Block';
import './style.css';
import addPerson from './add-person.hbs';
import avatarEdit from './avatar-edit.hbs';
import chatSettings from './chat_settings.hbs';
import expand from './expand.hbs';
import clip from './clip.hbs';
import close from './close.hbs';
import search from './search.hbs';
import send from './send.hbs';
import settings from './settings.hbs';
import sound from './sound.hbs';

enum IconTypes {
  CLOSE = 'close',
  ADD_PERSON = 'addPerson',
  AVATAR_EDIT = 'avatarEdit',
  CLIP = 'clip',
  CHAT_SETTINGS = 'chatSettings',
  EXPAND = 'expand',
  SEARCH = 'search',
  SEND = 'send',
  SETTINGS = 'settings',
  SOUND = 'sound',
}

interface IconProps {
  type: IconTypes;
  onClick?: () => void;
}

export class Icon extends Block<Pick<IconProps, 'type'> & BlockEvents> {
  static componentName = 'Icon';
  constructor({ type, onClick }: IconProps) {
    super({ type, events: { click: onClick } });
  }

  render() {
    if (!this.props.type) {
      throw new Error('не могу отобразить иконку без поля type');
    }
    switch (this.props.type) {
      case IconTypes.CLOSE:
        return close;
      case IconTypes.CLIP:
        return clip;
      case IconTypes.ADD_PERSON:
        return addPerson;
      case IconTypes.AVATAR_EDIT:
        return avatarEdit;
      case IconTypes.CHAT_SETTINGS:
        return chatSettings;
      case IconTypes.EXPAND:
        return expand;
      case IconTypes.SEND:
        return send;
      case IconTypes.SEARCH:
        return search;
      case IconTypes.SETTINGS:
        return settings;
      case IconTypes.SOUND:
        return sound;
      default:
        return close;
    }
  }
}
