import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lpgroup/vite-plugin-replace',
  description: 'Vite plugin to replace string in all code files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'string',
    'replace',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@lpgroup/vite-plugin-replace',
    website: 'https://gitlab.com/lpgroup/lpgroup/-/tree/master/packages/vite-plugin-replace',
  },
  source: {
    npm: '@lpgroup/vite-plugin-replace',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1015,
      weekly: 96,
    },
  },
})
