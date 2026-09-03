import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dconco/phpspa-vite-plugin',
  description: 'Vite plugin for PhpSPA integration with dev server proxying',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'phpspa',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dconco/phpspa-vite-plugin',
    npm: 'https://www.npmjs.com/package/@dconco/phpspa-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
