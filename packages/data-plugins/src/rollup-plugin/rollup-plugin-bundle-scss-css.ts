import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-scss-css',
  description: 'Rollup .scss imports into one bundled .scss file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'scss',
    'vue',
  ],
  source: {
    github: 'weizhenye/rollup-plugin-bundle-scss',
    npm: 'rollup-plugin-bundle-scss-css',
  },
  links: {
    github: 'https://github.com/weizhenye/rollup-plugin-bundle-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-scss-css',
    website: 'https://github.com/weizhenye/rollup-plugin-bundle-scss#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
