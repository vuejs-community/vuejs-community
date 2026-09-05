import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nupolyon',
  description: 'Inject polyfill from polyfill.io to nuxt project, auto detect based on browserslist config',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/adenvt/nupolyon',
    npm: 'https://npmjs.com/package/nupolyon',
    website: 'https://github.com/adenvt/nupolyon',
  },
  source: {
    github: 'adenvt/nupolyon',
    npm: 'nupolyon',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 655,
      weekly: 111,
    },
  },
})
