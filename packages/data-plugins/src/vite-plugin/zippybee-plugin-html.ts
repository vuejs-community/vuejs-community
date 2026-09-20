import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zippybee/plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@zippybee/plugin-html',
    website: 'https://dreams88.coding.net/p/zippybee-cli/d/zippybee-cli/git/tree/master/packages/zippybee-plugin-html/README.MD',
  },
  source: {
    npm: '@zippybee/plugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
