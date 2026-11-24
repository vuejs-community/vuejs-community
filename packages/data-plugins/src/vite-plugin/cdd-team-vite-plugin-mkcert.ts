import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cdd-team/vite-plugin-mkcert',
  description: 'Плагин dev-сервера Vite: локальный HTTPS сертификатом mkcert, без чужого mkcert из PATH',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mkcert',
    'https',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/Cringe-Driven-Development-Team/frontend-packages',
    npm: 'https://www.npmjs.com/package/@cdd-team/vite-plugin-mkcert',
    website: 'https://github.com/Cringe-Driven-Development-Team/frontend-packages#readme',
  },
  source: {
    github: 'Cringe-Driven-Development-Team/frontend-packages',
    npm: '@cdd-team/vite-plugin-mkcert',
  },
})
