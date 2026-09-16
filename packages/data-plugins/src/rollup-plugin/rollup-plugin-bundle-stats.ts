import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-stats',
  description: 'Analyze Rollup/Vite/Rolldown bundle stats(bundle size, assets, modules, packages) and compare the results between different builds',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'rolldown-plugin',
    'bundle-size',
    'bundle-analyzer',
    'bundle-stats',
    'stats',
    'bundle',
    'size',
    'assets',
    'chunks',
    'modules',
  ],
  source: {
    github: 'relative-ci/bundle-stats',
    npm: 'rollup-plugin-bundle-stats',
  },
  links: {
    github: 'https://github.com/relative-ci/bundle-stats',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-stats',
    website: 'https://github.com/relative-ci/bundle-stats/blob/master/packages/rollup-plugin#readme',
  },
  stats: {
    stars: 672,
    downloads: {
      monthly: 803819,
      weekly: 147461,
    },
  },
})
