import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'mojocss',
  description: 'The Atomic CSS Framework for crafting gorgeous UIs without shipping any CSS.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/mojocss/mojocss-nuxt-module',
    npm: 'https://npmjs.com/package/@mojocss/nuxt',
    website: 'https://github.com/mojocss/mojocss-nuxt-module',
  },
  source: {
    github: 'mojocss/mojocss-nuxt-module',
    npm: '@mojocss/nuxt',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 69,
      weekly: 15,
    },
  },
})
