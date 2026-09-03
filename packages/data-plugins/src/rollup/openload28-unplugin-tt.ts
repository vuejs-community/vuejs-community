import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@openload28/unplugin-tt',
  description: 'Compile .tt and .ttx modules with ttc in Vite, Rollup, webpack, Rspack, esbuild and Farm',
  version: '0.1.0-next.1.0.0.20260828.263',
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
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/load28/tt',
    npm: 'https://www.npmjs.com/package/@openload28/unplugin-tt',
  },
  stats: {
    downloads: {
      monthly: 333,
      weekly: 333,
    },
  },
})
