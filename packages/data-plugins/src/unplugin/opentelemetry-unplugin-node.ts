import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'opentelemetry-unplugin-node',
  description: 'Unplugin plugin which bundles opentelemetry node core and contrib instrumentations into your code',
  version: '4.6.0',
  category: 'plugin',
  tags: [
    'opentelemetry',
    'bundler',
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DrewCorlin/opentelemetry-node-bundler-plugins',
    npm: 'https://www.npmjs.com/package/opentelemetry-unplugin-node',
  },
  stats: {
    downloads: {
      monthly: 190,
      weekly: 171,
    },
  },
})
