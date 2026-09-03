import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/unplugin',
  description: 'Universal bundler plugin for Nola (.tsi): Vite, webpack, Rollup, esbuild, Rspack via unplugin',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'nola',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'rspack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/unplugin',
  },
  stats: {
    downloads: {
      monthly: 917,
      weekly: 301,
    },
  },
})
