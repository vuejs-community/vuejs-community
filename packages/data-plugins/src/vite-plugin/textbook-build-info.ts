import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@textbook/build-info',
  description: 'Generate build information for tracking deployments',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'textbook/build-info',
    npm: '@textbook/build-info',
  },
  links: {
    github: 'https://github.com/textbook/build-info',
    npm: 'https://www.npmjs.com/package/@textbook/build-info',
    website: 'https://github.com/textbook/build-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 795,
      weekly: 144,
    },
  },
})
