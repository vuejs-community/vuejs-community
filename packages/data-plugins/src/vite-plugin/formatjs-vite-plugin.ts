import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@formatjs/vite-plugin',
  description: 'Vite plugin for FormatJS AST transformations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'formatjs',
    'i18n',
    'internationalization',
    'react-intl',
    'vite-plugin',
  ],
  source: {
    github: 'formatjs/formatjs',
    npm: '@formatjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/formatjs/formatjs',
    npm: 'https://www.npmjs.com/package/@formatjs/vite-plugin',
    website: 'https://github.com/formatjs/formatjs#readme',
  },
  stats: {
    stars: 14745,
    downloads: {
      monthly: 5797,
      weekly: 1075,
    },
  },
})
