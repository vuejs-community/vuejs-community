import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ryancui-/unplugin-auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.1',
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
    npm: 'https://www.npmjs.com/package/@ryancui-/unplugin-auto-import',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
