import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-import-api',
  description: 'Auto import APIs on-demand for Vite, Webpack and Rollup',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'rollup-plugin',
    'astro-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-auto-import-api',
  },
  stats: {
    downloads: {
      monthly: 62,
      weekly: 22,
    },
  },
})
