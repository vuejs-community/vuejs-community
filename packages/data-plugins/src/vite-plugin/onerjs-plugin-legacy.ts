import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@onerjs/plugin-legacy',
  description: 'Vite\'s minimum browser support target is [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). This plugin provides support for legacy browsers that do no',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    '@vitejs/plugin-legacy',
  ],
  links: {
    github: 'https://github.com/vitejs/vite',
    npm: 'https://www.npmjs.com/package/@onerjs/plugin-legacy',
    website: 'https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme',
  },
  source: {
    github: 'vitejs/vite',
    npm: '@onerjs/plugin-legacy',
  },
  stats: {
    stars: 82851,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
