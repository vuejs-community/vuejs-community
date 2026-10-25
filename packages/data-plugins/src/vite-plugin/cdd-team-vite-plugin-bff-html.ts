import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cdd-team/vite-plugin-bff-html',
  description: 'Плагин dev-сервера Vite: HTML страниц отдаёт BFF, Vite добавляет в него клиент HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bff',
    'ssr',
    'html',
  ],
  links: {
    github: 'https://github.com/Cringe-Driven-Development-Team/frontend-packages',
    npm: 'https://www.npmjs.com/package/@cdd-team/vite-plugin-bff-html',
    website: 'https://github.com/Cringe-Driven-Development-Team/frontend-packages#readme',
  },
  source: {
    github: 'Cringe-Driven-Development-Team/frontend-packages',
    npm: '@cdd-team/vite-plugin-bff-html',
  },
})
