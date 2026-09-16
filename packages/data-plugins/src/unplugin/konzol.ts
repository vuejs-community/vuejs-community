import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'konzol',
  description: 'An unplugin plugin to add a powerful logging macro to JS/TS thats 0 bytes in production.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'logging',
    'console',
  ],
  source: {
    github: 'web-dev-sam/konsol',
    npm: 'konzol',
  },
  links: {
    github: 'https://github.com/web-dev-sam/konsol',
    npm: 'https://www.npmjs.com/package/konzol',
    website: 'https://github.com/web-dev-sam/konsol',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
