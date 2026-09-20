import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oxog/i18n-vite',
  description: 'Vite plugin for @oxog/i18n',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'vite',
    'vite-plugin',
    'internationalization',
    'localization',
    'translation',
  ],
  links: {
    github: 'https://github.com/ersinkoc/i18n',
    npm: 'https://www.npmjs.com/package/@oxog/i18n-vite',
    website: 'https://github.com/ersinkoc/i18n#readme',
  },
  source: {
    github: 'ersinkoc/i18n',
    npm: '@oxog/i18n-vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
