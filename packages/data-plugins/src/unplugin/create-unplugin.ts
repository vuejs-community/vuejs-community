import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-unplugin',
  description: 'Initialize a new unplugin package.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
  ],
  source: {
    github: 'jwr12135/create-unplugin',
    npm: 'create-unplugin',
  },
  links: {
    github: 'https://github.com/jwr12135/create-unplugin',
    npm: 'https://www.npmjs.com/package/create-unplugin',
    website: 'https://github.com/jwr12135/create-unplugin#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
