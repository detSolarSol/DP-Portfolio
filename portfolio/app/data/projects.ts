export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  screenshots: string[];
  link: string;
  linkType: 'live' | 'figma';
}

export const projects: Project[] = [
  {
    id: 'mobile-payment',
    title: 'Лендинг оплаты мобильной связи',
    shortDescription: 'Адаптивная страница с платёжной формой и масками ввода.',
    detailedDescription:
      'Проект выполнен в рамках производственной практики в компании «Безлимит». Реализована форма с масками ввода номера телефона и банковской карты, клиентская валидация, модальное окно подтверждения и экран успешной оплаты. Стек: React, TypeScript, SCSS.',
    technologies: ['React', 'TypeScript', 'SCSS'],
    screenshots: ['/images/payment-1.png'],
    link: 'https://example.com/payment',
    linkType: 'live',
  },
  {
    id: 'doc-signing',
    title: 'Лендинг подписания документов',
    shortDescription: 'Веб-страница с загрузкой файлов и drag-and-drop.',
    detailedDescription:
      'Проект выполнен в рамках производственной практики. Реализована область drag-and-drop для загрузки файлов, индикатор прогресса, модальное окно подтверждения и экран завершения операции. Стек: React, TypeScript, Redux Toolkit.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit'],
    screenshots: ['/images/doc-signing-1.png'],
    link: 'https://example.com/doc-signing',
    linkType: 'live',
  },
  {
    id: 'weather',
    title: 'Приложение «Погода»',
    shortDescription: 'SPA для просмотра текущей погоды и прогноза.',
    detailedDescription:
      'Одностраничное приложение для просмотра погоды по выбранному городу. Реализован поиск города, отображение текущей температуры, влажности, скорости ветра и прогноза на несколько дней. Интерфейс спроектирован в Figma.',
    technologies: ['React', 'OpenWeather API', 'Figma'],
    screenshots: ['/images/weather-1.png'],
    link: 'https://figma.com/proto/weather',
    linkType: 'figma',
  },
  {
    id: 'todo',
    title: 'Приложение «To-Do List»',
    shortDescription: 'SPA для управления списком задач.',
    detailedDescription:
      'Приложение для управления задачами: добавление, удаление, отметка выполнения и фильтрация по статусу. Интерфейс спроектирован в Figma. Реализация в коде запланирована как следующий этап.',
    technologies: ['React', 'TypeScript', 'Figma'],
    screenshots: ['/images/todo-1.png'],
    link: 'https://figma.com/proto/todo',
    linkType: 'figma',
  },
];