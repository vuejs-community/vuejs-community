import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@0x-jerry/unplugin-env',
  description: 'Auto generate typedef for env variables.',
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
    'transform',
  ],
  source: {
    npm: '@0x-jerry/unplugin-env',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@0x-jerry/unplugin-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 98,
      weekly: 4,
    },
  },
})
