export type Lang = 'en' | 'ru'

export const translations = {
  en: {
    meta: {
      description:
        'David Tsymbalov — web application and website developer. Portfolio and contacts.',
      ogTitle: 'David Tsymbalov — developer',
      ogDescription: 'Developer portfolio. Web apps, websites, end-to-end projects.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      themeToggle: 'Toggle theme',
      menu: 'Menu',
      langEn: 'ENG',
      langRu: 'RU',
      langSwitch: 'Switch language',
    },
    hero: {
      lead: 'I build end-to-end projects — from landing pages to web applications. Happy to discuss your brief.',
      cta: 'Get in touch',
      telegram: 'Telegram',
    },
    about: {
      title: 'About',
      p1: 'I specialize in TypeScript and Python. What interests me most is building products people actually use.',
      p2: 'I work across frontend, backend, and databases. I prefer clearly defined goals and transparent communication.',
      p3: 'This site is a work in progress. Detailed case studies and project write-ups will appear here soon.',
    },
    work: {
      eyebrow: 'workflow',
      title: 'What working on your project looks like',
      lead: 'Every project is built individually — with your goals, constraints, and requirements in mind. No cookie-cutter solutions.',
      points: [
        {
          title: 'Direct contact',
          text: 'Reach me on Telegram — no middlemen or extra handoffs when you need a quick decision.',
        },
        {
          title: 'Full development cycle',
          text: 'I take the project from layout and logic through to deployment on the server.',
        },
        {
          title: 'Clear timelines',
          text: 'I share realistic timelines upfront and suggest practical ways to get started.',
        },
      ],
      cta: 'Discuss a project',
      previewAlt: 'Workflow — project code in the editor',
      previewPlaceholder: 'Add the file',
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
      intro: 'Selected work. More case studies coming soon.',
      notevault: {
        name: 'NoteVault',
        role: 'Lead Product Designer',
        expand: 'Expand',
        collapse: 'Collapse',
        description:
          'A notes app that brings order to your thoughts — notes, journals, and projects in one clean system. Smart reminders for unfinished notes, clear structure, and AI-assisted tools for faster capture and organization.',
        credit:
          'Responsible for the full product design: visual identity, UX flows, and interface architecture.',
        stackLabel: 'Stack',
        stack: ['Figma'],
        figmaLink: 'View project in Figma',
        figmaUrl:
          'https://www.figma.com/design/AZwrF6rGbF8PMlP0MnJxG7/Untitled?node-id=0-1&t=LVmK3nn8qjJm8Gmr-1',
        channelLabel: 'Project Telegram',
        channel: 'notevaultt',
      },
    },
    contact: {
      title: 'Contact',
      lead: 'Describe the task briefly — I will reply, say whether I can help, and outline timelines and cost.',
      handle: '@DavidTsymbalov',
    },
    footer: {
      telegram: 'Telegram',
    },
  },
  ru: {
    meta: {
      description:
        'David Tsymbalov — разработчик веб-приложений и сайтов. Портфолио и контакты.',
      ogTitle: 'David Tsymbalov — разработчик',
      ogDescription: 'Портфолио разработчика. Веб-приложения, сайты, проекты под ключ.',
    },
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
      themeToggle: 'Переключить тему',
      menu: 'Меню',
      langEn: 'ENG',
      langRu: 'RU',
      langSwitch: 'Переключить язык',
    },
    hero: {
      lead: 'Разрабатываю проекты под ключ — от лендингов до веб-приложений. Буду рад обсудить вашу задачу.',
      cta: 'Связаться',
      telegram: 'Telegram',
    },
    about: {
      title: 'Обо мне',
      p1: 'Специализируюсь на TypeScript и Python. Наибольший интерес представляет создание продуктов, которыми действительно пользуются.',
      p2: 'Работаю с фронтендом, бэкендом и базами данных. Предпочитаю чётко сформулированные задачи и прозрачную коммуникацию.',
      p3: 'Данный сайт находится в разработке. В ближайшее время здесь появятся подробные кейсы и описания проектов.',
    },
    work: {
      eyebrow: 'рабочий процесс',
      title: 'Как выглядит работа над вашим проектом',
      lead: 'Каждый проект разрабатывается индивидуально — с учётом задачи, целей и требований заказчика. Без шаблонных решений.',
      points: [
        {
          title: 'Прямой контакт',
          text: 'Связь через Telegram — без посредников и лишних согласований, при необходимости.',
        },
        {
          title: 'Полный цикл разработки',
          text: 'Самостоятельно веду проект от вёрстки и логики до развёртывания на сервере.',
        },
        {
          title: 'Прозрачные сроки',
          text: 'Заранее озвучиваю реалистичные сроки и предлагаю оптимальные решения для старта.',
        },
      ],
      cta: 'Обсудить проект',
      previewAlt: 'Рабочий процесс — код проекта в редакторе',
      previewPlaceholder: 'Добавь файл',
    },
    skills: {
      title: 'Навыки',
    },
    projects: {
      title: 'Проекты',
      intro: 'Избранные проекты. Подробные кейсы появятся здесь позже.',
      notevault: {
        name: 'NoteVault',
        role: 'Ведущий продуктовый дизайнер',
        expand: 'Раскрыть',
        collapse: 'Свернуть',
        description:
          'Приложение для заметок, которое приводит мысли в порядок: обычные заметки, дневники и проекты в одной системе. Уведомления о незавершённых заметках, понятная структура и AI-инструменты для быстрой фиксации и организации.',
        credit:
          'Отвечал за дизайн продукта целиком: визуальная идентичность, UX-сценарии и архитектура интерфейса.',
        stackLabel: 'Стек',
        stack: ['Figma'],
        figmaLink: 'Смотреть проект в Figma',
        figmaUrl:
          'https://www.figma.com/design/AZwrF6rGbF8PMlP0MnJxG7/Untitled?node-id=0-1&t=LVmK3nn8qjJm8Gmr-1',
        channelLabel: 'Telegram проекта',
        channel: 'notevaultt',
      },
    },
    contact: {
      title: 'Контакты',
      lead: 'Опишите задачу кратко — я отвечу и сообщу, смогу ли помочь, а также уточню сроки и стоимость.',
      handle: '@DavidTsymbalov',
    },
    footer: {
      telegram: 'Telegram',
    },
  },
} as const

export type TranslationKeys = (typeof translations)[Lang]
