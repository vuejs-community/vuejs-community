import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rescript',
  description: 'a plugin for integration ReScript with most Bundler (Vite, Rollup, Webpack, Esbuild, etc).',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'plugins',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'farm',
    'rescript',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/r17x/js',
    npm: 'https://www.npmjs.com/package/unplugin-rescript',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
