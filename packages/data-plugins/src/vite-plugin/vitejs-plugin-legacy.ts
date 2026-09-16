import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-legacy',
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
  source: {
    github: 'vitejs/vite',
    npm: '@vitejs/plugin-legacy',
  },
  links: {
    github: 'https://github.com/vitejs/vite',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-legacy',
    website: 'https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2781844,
      weekly: 514900,
    },
  },
})
