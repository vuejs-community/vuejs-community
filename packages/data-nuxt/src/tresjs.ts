import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tresjs',
  description: 'Create 3D experiences in your Nuxt application using TresJS.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tresjs/tres',
    npm: 'https://npmjs.com/package/@tresjs/nuxt',
    website: 'https://docs.tresjs.org/getting-started/installation#nuxt-project',
  },
  source: {
    github: 'tresjs/tres#main/packages/nuxt',
    npm: '@tresjs/nuxt',
  },
  stats: {
    stars: 3695,
    downloads: {
      monthly: 47953,
      weekly: 11814,
    },
  },
})
