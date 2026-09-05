import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18n-dev',
  description: 'Vite plugin for i18n development, help you to change locale file and see the change effect in real time.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'i18n',
    'i18n-dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Asaki-M/vite-plugin-i18n-dev',
    npm: 'https://www.npmjs.com/package/vite-plugin-i18n-dev',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
