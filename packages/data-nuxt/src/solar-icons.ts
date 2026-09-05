import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'solar-icons',
  description: 'Nuxt module that provides seamless integration of Solar Icons with auto-import, global configuration, and reactive controls.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/saoudi-h/solar-icons',
    npm: 'https://npmjs.com/package/@solar-icons/nuxt',
    website: 'https://solar-icons.vercel.app/docs/packages/nuxt',
  },
  source: {
    github: 'saoudi-h/solar-icons#main/packages/nuxt',
    npm: '@solar-icons/nuxt',
  },
  stats: {
    stars: 155,
    downloads: {
      monthly: 1545,
      weekly: 349,
    },
  },
})
