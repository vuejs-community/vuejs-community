import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@postinumero/unplugin-config',
  description: 'A plugin for managing build-time and runtime configuration across multiple build tools.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'ArnoSaine/postinumero',
    npm: '@postinumero/unplugin-config',
  },
  links: {
    github: 'https://github.com/ArnoSaine/postinumero',
    npm: 'https://www.npmjs.com/package/@postinumero/unplugin-config',
    website: 'https://github.com/ArnoSaine/postinumero/tree/main/packages/unplugin-config',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 56,
      weekly: 10,
    },
  },
})
