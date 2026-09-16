import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@md-plugins/vite-md-plugin',
  description: 'A very opinionated Vite plugin for @md-plugins.',
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
    npm: '@md-plugins/vite-md-plugin',
  },
  links: {
    github: 'https://github.com/md-plugins/md-plugins',
    npm: 'https://www.npmjs.com/package/@md-plugins/vite-md-plugin',
    website: 'https://github.com/md-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 950,
      weekly: 28,
    },
  },
})
