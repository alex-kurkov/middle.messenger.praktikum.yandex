import Block from 'core/Block';
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
  onClick: () => void;
}

export class Icon extends Block<IconProps> {
  static componentName = 'Icon';

  render() {
    if (!this.props.type) {
      return '<span>не могу отобразить иконку без поля type</span>';
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
