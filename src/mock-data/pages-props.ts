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
        pageUrl: 'messenger-expanded.hbs',
        text: 'Мессенджер',
        labelText: 'Лента сообщений с раскрытым меню',
      },
      {
        pageUrl: 'signin',
        text: 'Вход',
      },
      {
        pageUrl: 'signup',
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
};
