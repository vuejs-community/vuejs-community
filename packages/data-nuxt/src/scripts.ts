import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'scripts',
  description: 'Add 3rd-party scripts without sacrificing performance.',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/scripts',
    npm: 'https://npmjs.com/package/@nuxt/scripts',
    website: 'https://scripts.nuxt.com',
  },
  source: {
    github: 'nuxt/scripts#main/packages/script',
    npm: '@nuxt/scripts',
  },
  stats: {
    stars: 584,
    downloads: {
      monthly: 914981,
      weekly: 246506,
    },
  },
})
