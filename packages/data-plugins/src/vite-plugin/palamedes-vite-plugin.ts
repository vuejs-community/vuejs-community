import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@palamedes/vite-plugin',
  description: 'Vite plugin for Palamedes using OXC-based macro transformation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'localization',
    'oxc',
    'translation',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sebastian-software/palamedes',
    npm: 'https://www.npmjs.com/package/@palamedes/vite-plugin',
    website: 'https://github.com/sebastian-software/palamedes',
  },
  source: {
    github: 'sebastian-software/palamedes',
    npm: '@palamedes/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 2051,
      weekly: 263,
    },
  },
})
