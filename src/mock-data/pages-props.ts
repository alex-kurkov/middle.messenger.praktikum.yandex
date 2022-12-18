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
        pageUrl: 'messenger-expanded',
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
        value: '',
        labelText: 'Логин',
        name: 'login',
        required: true,
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
      },
      {
        type: 'button',
        name: 'signin',
        value: 'Войти',
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
      },
      {
        type: 'text',
        value: 'Иванов',
        labelText: 'Фамилия',
        name: 'second_name',
        required: true,
      },
      {
        type: 'text',
        value: null,
        labelText: 'Логин',
        name: 'login',
        required: true,
      },
      {
        type: 'text',
        value: null,
        labelText: 'Ник',
        name: 'display_name',
        required: true,
      },
      {
        type: 'email',
        value: null,
        labelText: 'E-mail',
        name: 'email',
        required: true,
      },
      {
        type: 'tel',
        labelText: 'Телефон',
        name: 'tel',
        required: true,
        autocomplete: true,
      },
      {
        type: 'password',
        labelText: 'Пароль',
        name: 'password',
        required: true,
        error: true,
        errorMessage: 'не менее 8 символов',
      },
      {
        type: 'password',
        labelText: 'Пароль еще раз',
        name: 'password-confirm',
        required: true,
      },
      {
        type: 'button',
        name: 'signup',
        value: 'Зарегистрироваться',
      },
    ],
    addon: {
      text: 'Уже зарегистрированы?',
      link: 'signin.hbs',
      linkText: 'Войти',
    },
  },
};
