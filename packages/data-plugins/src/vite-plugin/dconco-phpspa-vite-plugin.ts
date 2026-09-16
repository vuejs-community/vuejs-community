import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dconco/phpspa-vite-plugin',
  description: 'Vite plugin for PhpSPA integration with dev server proxying',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'phpspa',
    'proxy',
  ],
  source: {
    github: 'dconco/phpspa-vite-plugin',
    npm: '@dconco/phpspa-vite-plugin',
  },
  links: {
    github: 'https://github.com/dconco/phpspa-vite-plugin',
    npm: 'https://www.npmjs.com/package/@dconco/phpspa-vite-plugin',
    website: 'https://github.com/dconco/phpspa-vite-plugin#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 53,
      weekly: 41,
    },
  },
})
