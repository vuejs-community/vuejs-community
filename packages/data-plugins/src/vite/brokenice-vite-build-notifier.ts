import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brokenice/vite-build-notifier',
  description: 'A [Vite](https://vitejs.dev/) plugin that uses the [node-notifier](https://github.com/mikaelbr/node-notifier) package to display OS-level notifications for Webpack build events.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'notifier',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/brokenicedev/vite-build-notifier',
    npm: 'https://www.npmjs.com/package/@brokenice/vite-build-notifier',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
