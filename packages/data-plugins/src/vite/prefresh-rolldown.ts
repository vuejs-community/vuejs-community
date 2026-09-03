import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@prefresh/rolldown',
  description: 'A rolldown plugin to preserve Preact context identity during HMR.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'hmr',
    'preact',
    'prefresh',
    'rolldown',
    'rolldown-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/preactjs/prefresh',
    npm: 'https://www.npmjs.com/package/@prefresh/rolldown',
  },
  stats: {
    downloads: {
      monthly: 11771,
      weekly: 3167,
    },
  },
})
