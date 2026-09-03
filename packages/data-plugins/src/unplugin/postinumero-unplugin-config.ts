import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@postinumero/unplugin-config',
  description: 'A plugin for managing build-time and runtime configuration across multiple build tools.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'env',
    'config',
    'dynamic config',
    'runtime config',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/ArnoSaine/postinumero',
    npm: 'https://www.npmjs.com/package/@postinumero/unplugin-config',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 10,
    },
  },
})
