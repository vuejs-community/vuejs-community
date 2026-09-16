import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@md-plugins/vite-examples-plugin',
  description: 'A Vite plugin for @md-plugins for handling imported examples in markdown files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown-it',
    'quasarframework',
    'utils',
    'vite',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'md-plugins/md-plugins',
    npm: '@md-plugins/vite-examples-plugin',
  },
  links: {
    github: 'https://github.com/md-plugins/md-plugins',
    npm: 'https://www.npmjs.com/package/@md-plugins/vite-examples-plugin',
    website: 'https://github.com/md-plugins',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 861,
      weekly: 18,
    },
  },
})
