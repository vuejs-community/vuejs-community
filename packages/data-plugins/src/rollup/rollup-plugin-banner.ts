import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-banner',
  description: 'Rollup plugin to append content before js bundle',
  icon: 'logos:rollupjs',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'license',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'yingye/rollup-plugin-banner',
    npm: 'rollup-plugin-banner',
  },
  links: {
    github: 'https://github.com/yingye/rollup-plugin-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-banner',
  },
  stats: {
    downloads: {
      monthly: 6487,
      weekly: 1728,
    },
  },
})
