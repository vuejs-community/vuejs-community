import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kongponents',
  description: 'Kong Component library',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/kong/kongponents',
    npm: 'https://npmjs.com/package/@kong/kongponents',
    website: 'https://kongponents.konghq.com/',
  },
  source: {
    github: 'kong/kongponents',
    npm: '@kong/kongponents',
  },
  stats: {
    stars: 164,
    downloads: {
      monthly: 162939,
      weekly: 36435,
    },
  },
})
