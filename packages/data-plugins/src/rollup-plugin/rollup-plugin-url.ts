import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-url',
  description: 'Import files as data-URIs or ES Modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'url',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-url',
    website: 'https://github.com/rollup/plugins/tree/master/packages/url/#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-url',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1328200,
      weekly: 233728,
    },
  },
})
