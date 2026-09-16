import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brokenice/vite-build-notifier',
  description: 'A [Vite](https://vitejs.dev/) plugin that uses the [node-notifier](https://github.com/mikaelbr/node-notifier) package to display OS-level notifications for Webpack build events.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'notifier',
  ],
  source: {
    github: 'brokenicedev/vite-build-notifier',
    npm: '@brokenice/vite-build-notifier',
  },
  links: {
    github: 'https://github.com/brokenicedev/vite-build-notifier',
    npm: 'https://www.npmjs.com/package/@brokenice/vite-build-notifier',
    website: 'https://github.com/brokenicedev/vite-build-notifier#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
