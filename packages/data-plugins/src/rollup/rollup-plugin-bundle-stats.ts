import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-stats',
  description: 'Analyze Rollup/Vite/Rolldown bundle stats(bundle size, assets, modules, packages) and compare the results between different builds',
  version: '4.22.3',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/relative-ci/bundle-stats',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-stats',
  },
  stats: {
    downloads: {
      monthly: 899544,
      weekly: 214011,
    },
  },
})
