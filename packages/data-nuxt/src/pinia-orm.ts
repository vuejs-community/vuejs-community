import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'pinia-orm',
  description: 'The Pinia plugin to enable Object-Relational Mapping access to the Pinia Store.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/CodeDredd/pinia-orm',
    npm: 'https://npmjs.com/package/@pinia-orm/nuxt',
    website: 'https://pinia-orm.codedredd.de/',
  },
  source: {
    github: 'CodeDredd/pinia-orm#main/packages/nuxt',
    npm: '@pinia-orm/nuxt',
  },
  stats: {
    stars: 528,
    downloads: {
      monthly: 5284,
      weekly: 1018,
    },
  },
})
