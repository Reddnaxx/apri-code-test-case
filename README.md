# Тестовое задание для компании "Априкод"

[Попробовать на Github Pages](https://reddnaxx.github.io/apri-code-test-case/).

## Реализованный функционал

- Отображение списка задач в виде дерева.
- При клике на задачу справа отображается ее полный текст.
- Для любой задачи можно создавать подзадачи (и для любой подзадачи тоже,
  бесконечная вложенность).
- Список подзадач должен быть сворачиваемым.
- Справа от каждой задачи есть чекбокс. При его нажатии должна выделяется сама
  задача и все ее подзадачи.
- При выделении всех подзадач также выделяется родительская задача.
- Возможность удаления задач.
- Возможность редактирования заголовка/текста задачи.
- Хранение данных в `localStorage`.
- Использование библиотеки `MobX` для управления состоянием приложения.
- Использование библиотеки `React Router` для реализации роутинга.
- Использование библиотеки `React Portal` для реализации модальных окон.
- Использование библиотеки `Tailwind CSS` для стилизации.
- Написание тестов на `MobX Store`.
- Использование фреймворка `nx standalone` для сборки проекта.
- Поиск по задачам и подзадачам.
- Возможность настройки внешнего вида (темная / светлая тема) с помощью кнопки
  внизу справа.
- Начальная тема берется из системных настроек и сохраняется в `localStorage`.
- Реализация правого блока (задача / текст) через «вложенный» роутинг.
- Публикация приложения на `GitHub Pages` -
  [ссылка](https://reddnaxx.github.io/apri-code-test-case/).

## Запуск проекта

1. Убедитесь, что у вас установлен Node.js.

```bash
node -v
```

2. Установите зависимости:

```bash
yarn
```

2. Запустите проект:

```bash
yarn start
```
