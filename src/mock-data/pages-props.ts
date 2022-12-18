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

const chatMessages = 
  {
    id: 123,
    title: 'Илья Весенний',
    avatar: avatar1,
    unread_count: null,
    message_input: {
      type: 'text',
      name: 'message',
      placeholder: 'Введите сообщение',
    },
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
  }

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
        pageUrl: 'messenger-narrow',
        text: 'Мессенджер',
        labelText: 'Лента сообщений с узким меню, не выбран чат',
      },
      {
        pageUrl: 'messenger',
        text: 'Мессенджер',
        labelText: 'Лента сообщений с раскрытым меню',
      },
      {
        pageUrl: 'login',
        text: 'Вход',
      },
      {
        pageUrl: 'register',
        labelText:
          'Регистрация + разное состояние :focus (на поле пароль), autocomplete и пример ошибки валидации',
        text: 'Регистрация',
      },
      {
        pageUrl: 'profile',
        labelText:
          'Страница своего профиля - кнопки редактирования кликабельны',
        text: 'Профиль',
      },
      {
        pageUrl: '400',
        labelText: null,
        text: '400',
      },
      {
        pageUrl: '500',
        labelText: null,
        text: '5**',
      },
    ],
    title: 'Страницы проекта',
  },
  loginPage: {
    formTitle: 'Вход',
    inputs: [
      {
        type: 'text',
        name: 'login',
        labelText: 'Логин',
        id: 'login-page-login-input',
        required: true,
        placeholder: 'Введите_логин',
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'button',
        name: 'signin',
        value: 'Войти',
        id: nanoid(4),
      },
    ],
    addon: {
      text: null,
      link: 'register',
      linkText: 'Нет аккаунта?',
    },
  },
  registerPage: {
    formTitle: 'Регистрация',
    inputs: [
      {
        type: 'text',
        value: 'Иван',
        labelText: 'Имя',
        name: 'first_name',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'text',
        value: 'Иванов',
        labelText: 'Фамилия',
        name: 'second_name',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'text',
        value: null,
        labelText: 'Логин',
        name: 'login',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'text',
        value: null,
        labelText: 'Ник',
        name: 'display_name',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'email',
        value: null,
        labelText: 'E-mail',
        name: 'email',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'tel',
        labelText: 'Телефон',
        name: 'tel',
        required: true,
        autocomplete: true,
        id: nanoid(4),
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
        error: true,
        errorMessage: 'не менее 8 символов',
        id: nanoid(4),
      },
      {
        type: 'password',
        labelText: 'Пароль еще раз',
        name: 'password-confirm',
        required: true,
        id: nanoid(4),
      },
      {
        type: 'button',
        name: 'signup',
        value: 'Зарегистрироваться',
        id: nanoid(4),
      },
    ],
    addon: {
      text: 'Уже зарегистрированы?',
      link: 'login',
      linkText: 'Войти',
    },
  },
  messengerNarrow: {
    sideMenuExpanded: false,
    feedEmpty: true,
    chats,
    chatMessages,
  },
  messengerExpanded: {
    sideMenuExpanded: true,
    feedEmpty: false,
    chats,
    chatMessages,
  },
  profile: {
    editPasswordForm: {
      formTitle: null,
      inputs: [
        {
          type: 'password',
          labelText: 'Старый пароль',
          name: 'oldPassword',
          required: true,
        },
        {
          type: 'password',
          labelText: 'Новый пароль',
          name: 'newPassword',
          required: true,
          error: true,
          errorMessage: 'не менее 8 символов',
        },
        {
          type: 'button',
          name: 'signup',
          value: 'Сохранить',
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
      inputs: [
        {
          type: 'text',
          value: 'Иван',
          labelText: 'Имя',
          name: 'first_name',
          required: false,
        },
        {
          type: 'text',
          value: 'Иванов',
          labelText: 'Фамилия',
          name: 'second_name',
          required: false,
        },
        {
          type: 'text',
          value: null,
          labelText: 'Ник',
          name: 'display_name',
          required: false,
        },
        {
          type: 'text',
          value: null,
          labelText: 'Логин',
          name: 'login',
          required: false,
        },
        {
          type: 'email',
          value: null,
          labelText: 'E-mail',
          name: 'email',
          required: false,
        },
        {
          type: 'tel',
          labelText: 'Телефон',
          name: 'tel',
          required: false,
        },
        {
          type: 'button',
          name: 'signup',
          value: 'Сохранить',
        },
      ],
      addon: null,
    },
    profileEditButtons: [
      {
        type: 'button',
        name: 'edit',
        value: 'Редактировать',
        link: 'profile-data.hbs',
      },
      {
        type: 'button',
        name: 'edit',
        value: 'Изменить_пароль',
        link: 'profile-password.hbs',
      },
      {
        type: 'button',
        name: 'edit',
        value: 'Выйти',
        link: 'signin.hbs',
      },
    ],
    user: {
      first_name: 'Илья Сергеевич',
      second_name: 'Джонсонов',
      display_name: 'Илья Весенний',
      avatar: '../assets/avatar-template.png',
      email: 'my@email.com',
      login: 'userLogin',
      phone: '8(911)-222-33-22',
    },
  },
};
