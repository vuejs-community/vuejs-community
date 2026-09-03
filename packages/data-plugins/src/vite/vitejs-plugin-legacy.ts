import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-legacy',
  description: 'Vite\'s minimum browser support target is [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). This plugin provides support for legacy browsers that do no',
  version: '8.2.3',
  category: 'plugin',
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    '@vitejs/plugin-legacy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-legacy',
  },
  stats: {
    downloads: {
      monthly: 3020925,
      weekly: 738534,
    },
  },
})
