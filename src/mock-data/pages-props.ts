/* eslint-disable max-len */
import { nanoid } from 'nanoid';
import avatar1 from '../assets/avatar-template.png';
import avatar2 from '../assets/pear-avatar.png';

const chats = [
  {
    id: 123,
    title: 'Илья Весенний',
    avatar: avatar1,
    unread_count: null,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content: 'Привет. Как вчера все прошло?)) Надеюсь, что укпрукгпукр',
    },
    active: false,
  },
  {
    id: 123,
    title: 'Илья Весенний',
    avatar: avatar1,
    unread_count: 15,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2 января 2022',
      content: 'this is message content',
    },
    active: true,
    files: null,
  },
  {
    id: 123,
    title: 'Илья Весенний',
    avatar: avatar1,
    unread_count: null,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'вчера',
      content: 'this is message content',
    },
    active: false,
    files: null,
    lastIsMine: true,
  },
  {
    id: 165,
    title: 'PearStore',
    avatar: avatar2,
    unread_count: 8,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'позавчера',
      content: 'this is message content',
    },
    active: false,
  },
];

const chatMessages = {
  id: 123,
  title: 'Илья Весенний',
  avatar: avatar1,
  unread_count: null,
  messages: [
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content:
        'Предварительные выводы неутешительны: реализация намеченных плановых заданий предполагает независимые способы реализации стандартных подходов. Задача организации, в особенности же семантический разбор внешних противодействий требует анализа новых предложений! Противоположная точка зрения подразумевает, что интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме. В частности, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта играет определяющее значение для своевременного выполнения сверхзадачи.',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content:
        'Предварительные выводы неутешительны: реализация намеченных плановых заданий предполагает независимые способы реализации стандартных подходов. Задача организации, в особенности же семантический разбор внешних противодействий требует анализа новых предложений! Противоположная точка зрения подразумевает, что интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме. В частности, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта играет определяющее значение для своевременного выполнения сверхзадачи.',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content:
        'Предварительные выводы неутешительны: реализация намеченных плановых заданий предполагает независимые способы реализации стандартных подходов. Задача организации, в особенности же семантический разбор внешних противодействий требует анализа новых предложений! Противоположная точка зрения подразумевает, что интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме. В частности, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта играет определяющее значение для своевременного выполнения сверхзадачи.',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content:
        'Предварительные выводы неутешительны: реализация намеченных плановых заданий предполагает независимые способы реализации стандартных подходов. Задача организации, в особенности же семантический разбор внешних противодействий требует анализа новых предложений! Противоположная точка зрения подразумевает, что интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме. В частности, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта играет определяющее значение для своевременного выполнения сверхзадачи.',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      isFile: true,
      time: '13:29',
      url: avatar1,
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'вчера',
      content:
        'Предварительные выводы неутешительны: реализация намеченных плановых заданий предполагает независимые способы реализации стандартных подходов. Задача организации, в особенности же семантический разбор внешних противодействий требует анализа новых предложений! Противоположная точка зрения подразумевает, что интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме. В частности, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта играет определяющее значение для своевременного выполнения сверхзадачи.',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      isFile: true,
      time: '13:29',
      url: 'https://www.shutterstock.com/image-photo/stylish-composition-elegant-dining-room-600w-2050537277.jpg',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:30',
      content: 'Привет. Как вчера все прошло?)) Надеюсь, что хорошо...',
    },
    {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: avatar1,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '13:32',
      content: 'Все прошло так, как надо!',
      isOwn: true,
    },
  ],
};

export default {
  page400: {
    title: '400',
    message: 'Не туда попали',
    linkMessage: 'назад к страницам',
    link: '/',
  },
  page500: {
    title: '500',
    message: 'Мы уже фиксим',
    linkMessage: 'назад к страницам',
    link: '/',
  },
  mainPage: {
    links: [
      {
        pageUrl: '#messenger-narrow',
        text: 'Мессенджер',
        labelText: 'Лента сообщений с узким меню, не выбран чат',
      },
      {
        pageUrl: '#messenger',
        text: 'Мессенджер',
        labelText: 'Лента сообщений с раскрытым меню',
      },
      {
        pageUrl: '#login',
        text: 'Вход',
      },
      {
        pageUrl: '#register',
        labelText:
          'Регистрация + разное состояние :focus (на поле пароль), autocomplete и пример ошибки валидации',
        text: 'Регистрация',
      },
      {
        pageUrl: '#profile',
        labelText:
          'Страница своего профиля - кнопки редактирования кликабельны',
        text: 'Профиль',
      },
      {
        pageUrl: '#400',
        labelText: null,
        text: '400',
      },
      {
        pageUrl: '#500',
        labelText: null,
        text: '5**',
      },
    ],
    title: 'Страницы проекта',
  },
  loginPage: {
    formName: 'login',
    formTitle: 'Вход',
    inputs: [
      {
        type: 'text',
        name: 'login',
        labelText: 'Логин',
        id: nanoid(4),
        required: true,
        placeholder: 'Введите логин',
        ref: 'login_inputRef',
        errorRef: 'login_errorRef',
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
        id: nanoid(4),
        ref: 'password_inputRef',
        errorRef: 'password_errorRef',
      },
    ],
    formButton: {
      text: 'Войти',
    },
    addon: {
      text: null,
      link: '#register',
      linkText: 'Нет аккаунта?',
    },
  },
  registerPage: {
    formTitle: 'Регистрация',
    formName: 'register',
    formButton: {
      text: 'Зарегистрироваться',
    },
    inputs: [
      {
        type: 'text',
        value: 'Иван',
        labelText: 'Имя',
        name: 'first_name',
        required: true,
        id: nanoid(4),
        ref: 'first_name_inputRef',
        errorRef: 'first_name_errorRef',
      },
      {
        type: 'text',
        value: 'Иванов',
        labelText: 'Фамилия',
        name: 'second_name',
        required: true,
        id: nanoid(4),
        ref: 'second_name_inputRef',
        errorRef: 'second_name_errorRef',
      },
      {
        type: 'text',
        value: null,
        labelText: 'Логин',
        name: 'login',
        required: true,
        id: nanoid(4),
        ref: 'login_inputRef',
        errorRef: 'login_errorRef',
      },
      {
        type: 'text',
        value: null,
        labelText: 'Ник',
        name: 'display_name',
        required: true,
        id: nanoid(4),
        ref: 'display_name_inputRef',
        errorRef: 'display_name_errorRef',
      },
      {
        type: 'email',
        value: null,
        labelText: 'E-mail',
        name: 'email',
        required: true,
        id: nanoid(4),
        ref: 'email_inputRef',
        errorRef: 'email_errorRef',
      },
      {
        type: 'tel',
        labelText: 'Телефон',
        name: 'phone',
        required: true,
        autocomplete: 'on',
        id: nanoid(4),
        ref: 'phone_inputRef',
        errorRef: 'phone_errorRef',
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
        error: '',
        id: nanoid(4),
        ref: 'password_inputRef',
        errorRef: 'password_errorRef',
      },
      {
        type: 'password',
        labelText: 'Пароль еще раз',
        name: 'repeat_password',
        required: true,
        id: nanoid(4),
        ref: 'repeat_password_inputRef',
        errorRef: 'repeat_password_errorRef',
      },
    ],
    addon: {
      text: 'Уже зарегистрированы?',
      link: '#login',
      linkText: 'Войти',
    },
  },
  messengerNarrow: {
    sideMenuExpanded: false,
    feedEmpty: true,
    chats,
    chatMessages,
    inputs: [
      {
        type: 'text',
        name: 'message',
        placeholder: 'Введите сообщение',
        ref: 'message_inputRef',
        id: nanoid(4),
      },
    ],
  },
  messengerExpanded: {
    sideMenuExpanded: true,
    feedEmpty: false,
    chats,
    chatMessages,
    inputs: [
      {
        type: 'text',
        name: 'message',
        placeholder: 'Введите сообщение',
        ref: 'message_inputRef',
        id: nanoid(4),
      },
    ],
  },
  profile: {
    editPasswordForm: {
      formTitle: null,
      formName: 'editPassword',
      formButton: {
        text: 'Сохранить',
      },
      inputs: [
        {
          type: 'password',
          labelText: 'Старый пароль',
          name: 'oldPassword',
          required: true,
          ref: 'oldPassword_inputRef',
          errorRef: 'oldPassword_errorRef',
          id: nanoid(7),
        },
        {
          type: 'password',
          labelText: 'Новый пароль',
          name: 'newPassword',
          required: true,
          error: '',
          ref: 'newPassword_inputRef',
          errorRef: 'newPassword_errorRef',
          id: nanoid(7),
        },
      ],
      addon: null,
    },
    avatarInput: {
      type: 'file',
      name: 'avatar',
      required: false,
      id: 'avatar-input',
      accept: 'image/*',
    },
    editPersonalDataForm: {
      formTitle: null,
      formName: 'editPersonalData',
      formButton: {
        text: 'Сохранить',
      },
      inputs: [
        {
          type: 'text',
          value: 'Иван',
          labelText: 'Имя',
          name: 'first_name',
          required: false,
          ref: 'first_name_inputRef',
          errorRef: 'first_name_errorRef',
        },
        {
          type: 'text',
          value: 'Иванов',
          labelText: 'Фамилия',
          name: 'second_name',
          required: false,
          ref: 'second_name_inputRef',
          errorRef: 'second_name_errorRef',
        },
        {
          type: 'text',
          value: null,
          labelText: 'Ник',
          name: 'display_name',
          required: false,
          ref: 'display_name_inputRef',
          errorRef: 'display_name_errorRef',
        },
        {
          type: 'text',
          value: null,
          labelText: 'Логин',
          name: 'login',
          required: false,
          ref: 'login_inputRef',
          errorRef: 'login_errorRef',
        },
        {
          type: 'email',
          value: null,
          labelText: 'E-mail',
          name: 'email',
          required: false,
          ref: 'email_inputRef',
          errorRef: 'email_errorRef',
        },
        {
          type: 'tel',
          labelText: 'Телефон',
          name: 'phone',
          required: false,
          ref: 'phone_inputRef',
          errorRef: 'phone_errorRef',
        },
      ],
      addon: null,
    },
    profileEditButtons: [
      {
        type: 'button',
        name: 'edit',
        text: 'Редактировать',
        link: '#profile-data',
      },
      {
        type: 'button',
        name: 'edit',
        text: 'Изменить_пароль',
        link: '#profile-password',
      },
      {
        type: 'button',
        name: 'edit',
        text: 'Выйти',
        link: '#login',
      },
    ],
    user: {
      first_name: 'Илья Сергеевич',
      second_name: 'Джонсонов',
      display_name: 'Илья Весенний',
      avatar: avatar1,
      email: 'my@email.com',
      login: 'userLogin',
      phone: '8(911)-222-33-22',
    },
  },
};
