import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@md-plugins/vite-ssg-plugin',
  description: 'A Vite plugin for @md-plugins static route inventory and future SSG output.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'markdown-it',
    'quasarframework',
    'ssg',
    'static-site-generation',
    'utils',
    'vite',
    'vite-plugin',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/md-plugins/md-plugins',
    npm: 'https://www.npmjs.com/package/@md-plugins/vite-ssg-plugin',
  },
  stats: {
    downloads: {
      monthly: 1686,
      weekly: 291,
    },
  },
})
