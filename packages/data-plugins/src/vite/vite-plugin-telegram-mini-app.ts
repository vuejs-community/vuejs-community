import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-telegram-mini-app',
  description: 'Telegram Mini App dev tooling for Vite: real signed initData in a plain browser, a WebApp mock and a debug panel that doubles as an inspector inside Telegram.',
  version: '0.3.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tehfreak/vite-plugin-telegram-mini-app',
    npm: 'https://www.npmjs.com/package/vite-plugin-telegram-mini-app',
  },
  stats: {
    downloads: {
      monthly: 296,
      weekly: 17,
    },
  },
})
