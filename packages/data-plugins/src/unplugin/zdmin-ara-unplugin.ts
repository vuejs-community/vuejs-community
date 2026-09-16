import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zdmin/ara-unplugin',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'openapi',
    'codegen',
  ],
  source: {
    github: 'zdminjs/ara',
    npm: '@zdmin/ara-unplugin',
  },
  links: {
    github: 'https://github.com/zdminjs/ara',
    npm: 'https://www.npmjs.com/package/@zdmin/ara-unplugin',
    website: 'https://github.com/zdminjs/ara#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 64,
      weekly: 4,
    },
  },
})
