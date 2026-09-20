import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nalth/plugin-legacy',
  description: 'Nalth\'s default browser support baseline is [Native ESM](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). This plugi',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'frontend',
    'nalth',
    'vite',
    'vite-plugin',
    'legacy',
  ],
  links: {
    github: 'https://github.com/nalikiru-dev/nalth.js',
    npm: 'https://www.npmjs.com/package/@nalth/plugin-legacy',
    website: 'https://github.com/nalikiru-dev/nalth.js/tree/main/packages/plugin-legacy#readme',
  },
  source: {
    github: 'nalikiru-dev/nalth.js',
    npm: '@nalth/plugin-legacy',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
