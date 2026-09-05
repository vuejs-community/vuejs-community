import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-header',
  description: 'Rollup plugin to append content before or after js bundle',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'header',
    'footer',
    'license',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tinysets/rollup-plugin-header',
    npm: 'https://www.npmjs.com/package/rollup-plugin-header',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 16,
    },
  },
})
