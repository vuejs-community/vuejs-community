import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18next-loader-patched',
  description: 'Vite plugin loader for client embedded i18next locales composited from one to many json or yaml files.',
  version: '2.0.4',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-i18next-loader-patched',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
