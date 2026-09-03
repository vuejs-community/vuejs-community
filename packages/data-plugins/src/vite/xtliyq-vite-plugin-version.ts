import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtliyq/vite-plugin-version',
  description: 'A Vite plugin that injects build version and build time into your frontend app.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-time',
    'inject',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtliyq/vite-plugin-version',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
