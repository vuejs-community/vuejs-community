import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'devtools',
  description: 'Visual tools that help you to know your Nuxt application better.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/devtools',
    npm: 'https://npmjs.com/package/@nuxt/devtools',
    website: 'https://devtools.nuxt.com',
  },
  source: {
    github: 'nuxt/devtools#main/packages/devtools',
    npm: '@nuxt/devtools',
  },
  stats: {
    stars: 3297,
    downloads: {
      monthly: 7204423,
      weekly: 1916256,
    },
  },
})
