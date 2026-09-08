import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-appsignal',
  description: 'The unofficial Appsignal plugin for Vite ⚡️',
  icon: 'logos:vite-icon',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'appsignal',
    'sourcemap',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'pantajoe/vite-plugin-appsignal',
    npm: 'vite-plugin-appsignal',
  },
  links: {
    github: 'https://github.com/pantajoe/vite-plugin-appsignal',
    npm: 'https://www.npmjs.com/package/vite-plugin-appsignal',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 8,
    },
  },
})
