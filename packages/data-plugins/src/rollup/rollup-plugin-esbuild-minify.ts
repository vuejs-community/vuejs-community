import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esbuild-minify',
  description: 'Rollup plugin to minify or clean up generated bundles using esbuild.',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'minify',
    'esbuild',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-esbuild-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esbuild-minify',
  },
  stats: {
    downloads: {
      monthly: 217975,
      weekly: 63001,
    },
  },
})
