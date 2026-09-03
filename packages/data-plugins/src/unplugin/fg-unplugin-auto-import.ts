import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'fg-unplugin-auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'astro',
    'webpack',
    'rollup',
    'rspack',
    'auto-import',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/unplugin/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/fg-unplugin-auto-import',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 6,
    },
  },
})
