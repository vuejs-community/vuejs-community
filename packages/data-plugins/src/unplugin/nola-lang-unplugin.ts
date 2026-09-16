import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/unplugin',
  description: 'Universal bundler plugin for Nola (.tsi): Vite, webpack, Rollup, esbuild, Rspack via unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'nola',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'rspack',
  ],
  source: {
    github: 'nola-lang/nola',
    npm: '@nola-lang/unplugin',
  },
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/unplugin',
    website: 'https://github.com/nola-lang/nola#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1569,
      weekly: 620,
    },
  },
})
