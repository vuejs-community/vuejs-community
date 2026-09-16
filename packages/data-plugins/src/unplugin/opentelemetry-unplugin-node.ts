import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'opentelemetry-unplugin-node',
  description: 'Unplugin plugin which bundles opentelemetry node core and contrib instrumentations into your code',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'DrewCorlin/opentelemetry-node-bundler-plugins',
    npm: 'opentelemetry-unplugin-node',
  },
  links: {
    github: 'https://github.com/DrewCorlin/opentelemetry-node-bundler-plugins',
    npm: 'https://www.npmjs.com/package/opentelemetry-unplugin-node',
    website: 'https://github.com/DrewCorlin/opentelemetry-node-bundler-plugins#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 196,
      weekly: 4,
    },
  },
})
