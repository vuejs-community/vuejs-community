import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prune-html',
  description: 'Nuxt module to prune html before sending it to the browser for boosting performance.',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/LuXDAmore/nuxt-prune-html',
    npm: 'https://npmjs.com/package/@luxdamore/nuxt-prune-html',
    website: 'https://luxdamore.github.io/nuxt-prune-html/',
  },
  source: {
    github: 'LuXDAmore/nuxt-prune-html',
    npm: '@luxdamore/nuxt-prune-html',
  },
  stats: {
    stars: 78,
    downloads: {
      monthly: 1522,
      weekly: 341,
    },
  },
})
