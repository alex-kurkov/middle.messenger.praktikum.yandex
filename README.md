# **Учебный проект Мессенджер**

[![Netlify Status](https://api.netlify.com/api/v1/badges/71857107-645a-426d-9e52-b4f0b73253ff/deploy-status)](https://app.netlify.com/sites/voluble-marshmallow-b07071/deploys)

## Сайт, макет, код

- макет приложения в приложении Фигма [здесь](https://www.figma.com/file/jbEHoHxmQfW9PpMG2SCI96/YAP_messenger?t=lqSEdEbcNCIGZbhK-6)
- проект доступен на сервисе render.com:

>- [хостинг через сборку Docker-контейнера](<https://docker-kurkov-msn.onrender.com>)
>- [как веб-сервис](https://kurkov-messenger.onrender.com)

- код проекта на [github](https://github.com/alex-kurkov/middle.messenger.praktikum.yandex)

## SPRINT_4 UPDATES

- настроена сборка проекта через webpack посредством 2 конфигураций - для prod-режима с минификацией и dev-режима с dev-сервером
- для минификации данных при загрузке строковых темплейтов из hbs-файлов подключен простой самописный лоадер, который убирает лишние пробелы и переносы строк, таким образом, сжимая строку
- подключены юнит-тесты на основные блоки, 2 компонента, утилиты
- настроена сборка образа Docker
- проведен аудит пакетов
- настроен прекоммит (выполняется линтинг и тесты)
- проект выложен на render.com в 2-х вариантах - как веб-сервис и через Docker-контейнер

![dashboard render.com](./.readme/render.jpg)

## SPRINT_3 UPDATES

- добавлен программный роутинг
- внедрен REST-API для получения/создания/изменения чатов и пользователей, а также для аутентификации и получения токена для установления сокет-соединения
- реализовано сокет-соединение для обмена live-сообщениями (пока поддерживаются только текстовые сообщения)
- внедрен глобальный стор
- подключение live-валидации и стора к конкретным компонентам реализована через классовые декораторы
- реализованы 2 типа декораторов методов класса для управления стандартными ошибками (`handleResponse` - для обработки "не-200" респонсов в REST-API запросах и  промисифицированный `withPromisifiedErrorHandle` - для работы с контроллерами (контроллеры при этом должны быть thenable и реджектиться с особым типом "ошибки" при выбросе исключения))
- более 50 мелких исправлений и улучшений логики. В том числе проверка на принадлежность юзера к уже добавленным, фолбек для рендера удаленного юзера в сообщениях, утилиты для парсинга и трансформации времени, клонирвания и глубокого сравнения объектов, улучшения по принципам DRY, стилевые улучшения и другое...
- добавлены ограничения на количество и частоту запросов для express-сервера с помощью мидлвара `express-rate-limit` , а также выставлены анти-xss заголовки с указанием допустимых источников контента с помощью мидлвара `helmet`

## SPRINT_2 UPDATES

- внедрен TS
- добавлены eslint, stylelint
- добавлена live-валидация на инпуты форм приложения (класс ValidatorController наследующий и расширяющий класс Validator). Помимо лайв-рендера ошибок, по сабмиту происходит вывод в консоль объектов данных и ошибок
- добавлен класс Fetch, реализующий базовые методы сетевых CRUD-запросов
- для удобства навигации реализован временный роутер, работающий в качестве хендлера события 'hashchange' и рендерящий в DOM разные страницы в зависимости от содержания хеша
- соответсвенно, генерация всех страниц - программная. Рендер - динамический

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
- typescript
- постпроцессор postcss с плагинами: -nested, -import
- шаблонизатор handlebars
- node-сервер express
- eslint
- stylelint
