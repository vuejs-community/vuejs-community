import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@load28/unplugin-tt',
  description: 'Compile .tt and .ttx modules with ttc in Vite, Rollup, webpack, Rspack, esbuild and Farm',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'tt',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/load28/tt',
    npm: 'https://www.npmjs.com/package/@load28/unplugin-tt',
  },
  stats: {
    downloads: {
      monthly: 1080,
      weekly: 1080,
    },
  },
})
