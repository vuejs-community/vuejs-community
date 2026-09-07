import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'devtools',
  description: 'Visual tools that help you to know your Nuxt application better.',
  icon: 'logos:nuxt-icon',
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
    stars: 3298,
    downloads: {
      monthly: 6904636,
      weekly: 1711922,
    },
  },
})
