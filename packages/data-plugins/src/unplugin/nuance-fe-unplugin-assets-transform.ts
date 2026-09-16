import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nuance-fe/unplugin-assets-transform',
  description: 'An unplugin that rewrites asset imports to CDN URLs at build time.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'cdn',
    'asset',
    'vite',
    'rollup',
    'webpack',
    'rspack',
    'esbuild',
  ],
  source: {
    npm: '@nuance-fe/unplugin-assets-transform',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@nuance-fe/unplugin-assets-transform',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
