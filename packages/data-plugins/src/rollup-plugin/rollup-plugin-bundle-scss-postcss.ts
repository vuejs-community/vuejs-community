import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-scss-postcss',
  description: 'Rollup .scss imports into one bundled .scss file. Also supports PostCSS.',
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
    github: 'alfed7/rollup-plugin-bundle-scss',
    npm: 'rollup-plugin-bundle-scss-postcss',
  },
  links: {
    github: 'https://github.com/alfed7/rollup-plugin-bundle-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-scss-postcss',
    website: 'https://github.com/alfed7/rollup-plugin-bundle-scss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
