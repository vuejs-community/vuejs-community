import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rescript',
  description: 'a plugin for integration ReScript with most Bundler (Vite, Rollup, Webpack, Esbuild, etc).',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/r17x/js',
    npm: 'https://www.npmjs.com/package/unplugin-rescript',
    website: 'https://github.com/r17x/js/tree/main/packages/unplugin-rescript#readme',
  },
  source: {
    github: 'r17x/js',
    npm: 'unplugin-rescript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
