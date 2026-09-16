import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@prefresh/rolldown',
  description: 'A rolldown plugin to preserve Preact context identity during HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hmr',
    'preact',
    'prefresh',
    'rolldown',
    'rolldown-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'preactjs/prefresh',
    npm: '@prefresh/rolldown',
  },
  links: {
    github: 'https://github.com/preactjs/prefresh',
    npm: 'https://www.npmjs.com/package/@prefresh/rolldown',
    website: 'https://github.com/preactjs/prefresh/tree/main/packages/rolldown#readme',
  },
  stats: {
    stars: 390,
    downloads: {
      monthly: 11697,
      weekly: 2817,
    },
  },
})
