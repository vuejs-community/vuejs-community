import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-telegram-mini-app',
  description: 'Telegram Mini App dev tooling for Vite: real signed initData in a plain browser, a WebApp mock and a debug panel that doubles as an inspector inside Telegram.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devtools',
    'initdata',
    'inspector',
    'mock',
    'telegram',
    'telegram-mini-apps',
    'tma',
    'vite-plugin',
  ],
  source: {
    github: 'tehfreak/vite-plugin-telegram-mini-app',
    npm: 'vite-plugin-telegram-mini-app',
  },
  links: {
    github: 'https://github.com/tehfreak/vite-plugin-telegram-mini-app',
    npm: 'https://www.npmjs.com/package/vite-plugin-telegram-mini-app',
    website: 'https://github.com/tehfreak/vite-plugin-telegram-mini-app#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 107,
      weekly: 13,
    },
  },
})
