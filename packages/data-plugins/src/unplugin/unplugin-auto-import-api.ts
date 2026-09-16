import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-import-api',
  description: 'Auto import APIs on-demand for Vite, Webpack and Rollup',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'rollup-plugin',
    'astro-plugin',
  ],
  source: {
    npm: 'unplugin-auto-import-api',
  },
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-auto-import-api',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 55,
      weekly: 18,
    },
  },
})
