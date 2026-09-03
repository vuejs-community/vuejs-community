import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nalth/plugin-legacy',
  description: 'Nalth\'s default browser support baseline is [Native ESM](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). This plugi',
  version: '0.9.0',
  category: 'plugin',
  tags: [
    'frontend',
    'nalth',
    'vite',
    'vite-plugin',
    'legacy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nalikiru-dev/nalth.js',
    npm: 'https://www.npmjs.com/package/@nalth/plugin-legacy',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 7,
    },
  },
})
