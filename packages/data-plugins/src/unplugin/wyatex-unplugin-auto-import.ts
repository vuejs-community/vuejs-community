import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wyatex/unplugin-auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.2',
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
    github: 'https://github.com/antfu/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/@wyatex/unplugin-auto-import',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
