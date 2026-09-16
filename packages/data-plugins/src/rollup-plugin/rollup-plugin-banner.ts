import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-banner',
  description: 'Rollup plugin to append content before js bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'license',
  ],
  source: {
    github: 'yingye/rollup-plugin-banner',
    npm: 'rollup-plugin-banner',
  },
  links: {
    github: 'https://github.com/yingye/rollup-plugin-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-banner',
    website: 'https://github.com/yingye/rollup-plugin-banner#readme',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 6597,
      weekly: 1937,
    },
  },
})
