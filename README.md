# My Shop — React Homework

Проект выполнен в структуре урока преподавателя: `Card/Card.jsx`, `List/List.jsx`, `src/db/data.json`, `.module.scss`, именованные экспорты, `eslint.config.js` и Ant Design.

## Запуск

```bash
npm install
npm run dev
```

## Проверка задания

- `List` импортирует JSON и выводит товары через `results.map()`.
- `Card` принимает `card` и массив `images` через props.
- `Math.random()` выбирает случайную картинку при рендеринге карточки.
- `onClick` кнопки `Buy now` выводит `id` и `name` в Console браузера.
- Все изображения лежат в `public/images`, поэтому не зависят от внешних URL.

Для проверки сборки: `npm run build`. Для ESLint: `npm run lint`.
