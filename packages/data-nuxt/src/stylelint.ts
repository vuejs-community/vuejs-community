import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'stylelint',
  description: 'Stylelint module for Nuxt. A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/stylelint',
    npm: 'https://npmjs.com/package/@nuxtjs/stylelint-module',
    website: 'https://github.com/nuxt-modules/stylelint',
  },
  source: {
    github: 'nuxt-modules/stylelint',
    npm: '@nuxtjs/stylelint-module',
  },
  stats: {
    stars: 72,
    downloads: {
      monthly: 166315,
      weekly: 40461,
    },
  },
})
