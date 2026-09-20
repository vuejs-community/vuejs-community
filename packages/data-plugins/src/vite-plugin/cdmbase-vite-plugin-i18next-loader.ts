import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cdmbase/vite-plugin-i18next-loader',
  description: 'Vite plugin loader for client embedded i18next locales composited from one to many json or yaml files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'loader',
    'i18next',
    'locales',
    'yaml',
    'json',
  ],
  links: {
    github: 'https://github.com/alienfast/vite-plugin-i18next-loader',
    npm: 'https://www.npmjs.com/package/@cdmbase/vite-plugin-i18next-loader',
    website: 'https://github.com/alienfast/vite-plugin-i18next-loader',
  },
  source: {
    github: 'alienfast/vite-plugin-i18next-loader',
    npm: '@cdmbase/vite-plugin-i18next-loader',
  },
  stats: {
    stars: 54,
    downloads: {
      monthly: 683,
      weekly: 85,
    },
  },
})
