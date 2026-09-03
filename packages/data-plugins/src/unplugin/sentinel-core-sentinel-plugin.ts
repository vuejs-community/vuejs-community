import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sentinel-core/sentinel-plugin',
  description: 'Vite, Webpack, Rollup and Esbuild plugin for Sentinel AST transformations',
  version: '1.0.22',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'unplugin',
    'sentinel',
    'react',
    'huinhub',
    'ast',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/firatorhan/sentinel',
    npm: 'https://www.npmjs.com/package/@sentinel-core/sentinel-plugin',
  },
  stats: {
    downloads: {
      monthly: 118,
      weekly: 3,
    },
  },
})
