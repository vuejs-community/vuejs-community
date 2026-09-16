import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-gem',
  description: 'Universal plugin for Gem element transformations (Vite/Webpack/Rollup/esbuild)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'mantou132/gem',
    npm: 'unplugin-gem',
  },
  links: {
    github: 'https://github.com/mantou132/gem',
    npm: 'https://www.npmjs.com/package/unplugin-gem',
    website: 'https://github.com/mantou132/gem#readme',
  },
  stats: {
    stars: 49,
    downloads: {
      monthly: 615,
      weekly: 92,
    },
  },
})
