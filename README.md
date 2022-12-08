# **Учебный проект Мессенджер**

[![Netlify Status](https://api.netlify.com/api/v1/badges/71857107-645a-426d-9e52-b4f0b73253ff/deploy-status)](https://app.netlify.com/sites/voluble-marshmallow-b07071/deploys)

## Сайт, макет, код

- макет приложения в приложении Фигма [здесь](https://www.figma.com/file/jbEHoHxmQfW9PpMG2SCI96/YAP_messenger?t=lqSEdEbcNCIGZbhK-6)
- проект доступен на сервисе [Netlify](https://voluble-marshmallow-b07071.netlify.app/)
- код проекта на [github](https://github.com/alex-kurkov/middle.messenger.praktikum.yandex)

---

## О проекте

Проект в рамках курса Мидл Фронтенд Разработчик от [Яндекс.Практикум](https://practicum.yandex.ru/) - веб-мессенджер реализованный от создания прототипа до полноценного приложения с возможностью управления пользователями, чатами, аутентификацией и т.п.

---

## Установка локальной версии

После скачивания репозитория и установки пакетов командой

```bash
npm install
```

доступны следующие команды

 ```bash
 # запуск приложения на локальном сервере в режиме разработчика
npm run dev

 # сборка проекта
npm run build

 # запуск оптимизированной версии приложения на локальном сервере по адресу http://localhost:3000
npm run start
```

## Использованные технологии

- html
- css
- постпроцессор postcss с плагинами: autoprefixer, -nested, -import, -simple-vars
- шаблонизатор handlebars
- node-сервер express
