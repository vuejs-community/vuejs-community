import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@0x-jerry/unplugin-demoblock',
  description: 'Easier to import a demo.',
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
    npm: '@0x-jerry/unplugin-demoblock',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@0x-jerry/unplugin-demoblock',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
