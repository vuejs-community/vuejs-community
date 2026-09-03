import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@0x-jerry/unplugin-env',
  description: 'Auto generate typedef for env variables.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@0x-jerry/unplugin-env',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 10,
    },
  },
})
