import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtliyq/vite-plugin-version',
  description: 'A Vite plugin that injects build version and build time into your frontend app.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-time',
    'inject',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xtliyq/vite-plugin-version',
  },
  source: {
    npm: '@xtliyq/vite-plugin-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
