import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nuance-fe/unplugin-assets-transform',
  description: 'An unplugin that rewrites asset imports to CDN URLs at build time.',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nuance-fe/unplugin-assets-transform',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
