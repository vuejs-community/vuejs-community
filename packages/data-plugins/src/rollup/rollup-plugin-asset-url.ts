import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-asset-url',
  description: 'fork from rollup-plugin-url and modify something',
  icon: 'logos:rollupjs',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'static assets',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'bigbigbo/rollup-plugin-asset-url',
    npm: 'rollup-plugin-asset-url',
  },
  links: {
    github: 'https://github.com/bigbigbo/rollup-plugin-asset-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-asset-url',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
