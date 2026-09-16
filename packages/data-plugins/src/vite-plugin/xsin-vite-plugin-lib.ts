import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xsin/vite-plugin-lib',
  description: 'Vite plugin for build configuration, automatic aliases, and type declarations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'declarations',
    'library',
    'aliases',
  ],
  source: {
    github: 'xsin/vue-waterfall',
    npm: '@xsin/vite-plugin-lib',
  },
  links: {
    github: 'https://github.com/xsin/vue-waterfall',
    npm: 'https://www.npmjs.com/package/@xsin/vite-plugin-lib',
    website: 'https://github.com/xsin/vue-waterfall/tree/main/packages/vite-plugin-lib',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
