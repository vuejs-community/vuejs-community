import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@datarose/rollup-plugin-minify',
  description: 'Rollup plugin to minify or clean up generated bundles using esbuild',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'minify',
    'esbuild',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/datarose-net/rollup-plugin-minify',
    npm: 'https://www.npmjs.com/package/@datarose/rollup-plugin-minify',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
