import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@amatlash/vite-plugin-stylelint',
  description: 'Vite 2 plugin to lint CSS with stylelint.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'stylelint',
  ],
  source: {
    github: 'AMatlash/vite-plugin-stylelint',
    npm: '@amatlash/vite-plugin-stylelint',
  },
  links: {
    github: 'https://github.com/AMatlash/vite-plugin-stylelint',
    npm: 'https://www.npmjs.com/package/@amatlash/vite-plugin-stylelint',
    website: 'https://github.com/AMatlash/vite-plugin-stylelint#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 287,
      weekly: 29,
    },
  },
})
