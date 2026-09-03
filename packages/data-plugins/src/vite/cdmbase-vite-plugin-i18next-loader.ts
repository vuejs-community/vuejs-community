import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cdmbase/vite-plugin-i18next-loader',
  description: 'Vite plugin loader for client embedded i18next locales composited from one to many json or yaml files.',
  version: '2.0.12',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'loader',
    'i18next',
    'locales',
    'yaml',
    'json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alienfast/vite-plugin-i18next-loader',
    npm: 'https://www.npmjs.com/package/@cdmbase/vite-plugin-i18next-loader',
  },
  stats: {
    downloads: {
      monthly: 729,
      weekly: 205,
    },
  },
})
