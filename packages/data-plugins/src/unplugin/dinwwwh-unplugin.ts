import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dinwwwh/unplugin',
  description: 'Utility for bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'dinwwwh',
    'dinwwwh-unplugin',
    'unplugin',
  ],
  source: {
    github: 'dinwwwh/dinwwwh',
    npm: '@dinwwwh/unplugin',
  },
  links: {
    github: 'https://github.com/dinwwwh/dinwwwh',
    npm: 'https://www.npmjs.com/package/@dinwwwh/unplugin',
    website: 'https://github.com/dinwwwh/dinwwwh',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 30,
      weekly: 8,
    },
  },
})
