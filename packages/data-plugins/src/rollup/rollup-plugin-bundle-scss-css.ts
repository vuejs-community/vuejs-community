import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-scss-css',
  description: 'Rollup .scss imports into one bundled .scss file',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'scss',
    'vue',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/weizhenye/rollup-plugin-bundle-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-scss-css',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
