import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unnoq/unplugin',
  description: 'Utility for bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unnoq',
    'unnoq-unplugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/unnoq/unnoq',
    npm: 'https://www.npmjs.com/package/@unnoq/unplugin',
    website: 'https://github.com/unnoq/unnoq',
  },
  source: {
    github: 'unnoq/unnoq',
    npm: '@unnoq/unplugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
