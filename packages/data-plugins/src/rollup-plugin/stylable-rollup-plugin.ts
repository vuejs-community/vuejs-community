import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stylable/rollup-plugin',
  description: 'Stylable plugin for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'Stylable',
  ],
  links: {
    github: 'https://github.com/wix/stylable',
    npm: 'https://www.npmjs.com/package/@stylable/rollup-plugin',
    website: 'https://github.com/wix/stylable/tree/master#readme',
  },
  source: {
    github: 'wix/stylable',
    npm: '@stylable/rollup-plugin',
  },
  stats: {
    stars: 1273,
    downloads: {
      monthly: 218,
      weekly: 6,
    },
  },
})
