import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-scss-postcss',
  description: 'Rollup .scss imports into one bundled .scss file. Also supports PostCSS.',
  version: '0.1.7',
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
    github: 'https://github.com/alfed7/rollup-plugin-bundle-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-scss-postcss',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
