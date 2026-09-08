import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-scss',
  description: 'Rollup .scss imports into one bundled .scss file',
  icon: 'logos:rollupjs',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'scss',
    'vue',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'weizhenye/rollup-plugin-bundle-scss',
    npm: 'rollup-plugin-bundle-scss',
  },
  links: {
    github: 'https://github.com/weizhenye/rollup-plugin-bundle-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-scss',
  },
  stats: {
    downloads: {
      monthly: 2681,
      weekly: 336,
    },
  },
})
