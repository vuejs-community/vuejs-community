import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'konzol',
  description: 'An unplugin plugin to add a powerful logging macro to JS/TS thats 0 bytes in production.',
  version: '0.1.1-beta.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'logging',
    'console',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/web-dev-sam/konsol',
    npm: 'https://www.npmjs.com/package/konzol',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
