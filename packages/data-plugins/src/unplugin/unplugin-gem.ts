import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-gem',
  description: 'Universal plugin for Gem element transformations (Vite/Webpack/Rollup/esbuild)',
  icon: 'icon:dark-unplugin',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'gem',
    'web-components',
    'swc',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'mantou132/gem',
    npm: 'unplugin-gem',
  },
  links: {
    github: 'https://github.com/mantou132/gem',
    npm: 'https://www.npmjs.com/package/unplugin-gem',
  },
  stats: {
    downloads: {
      monthly: 617,
      weekly: 241,
    },
  },
})
