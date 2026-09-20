import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sentinel-core/sentinel-plugin',
  description: 'Vite, Webpack, Rollup and Esbuild plugin for Sentinel AST transformations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'unplugin',
    'sentinel',
    'react',
    'huinhub',
    'ast',
  ],
  links: {
    github: 'https://github.com/firatorhan/sentinel',
    npm: 'https://www.npmjs.com/package/@sentinel-core/sentinel-plugin',
    website: 'https://github.com/firatorhan/sentinel#readme',
  },
  source: {
    github: 'firatorhan/sentinel',
    npm: '@sentinel-core/sentinel-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 2,
    },
  },
})
