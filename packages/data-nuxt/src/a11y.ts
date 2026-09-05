import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'a11y',
  description: 'Real-time accessibility feedback and automated testing in your browser during development.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/a11y',
    npm: 'https://npmjs.com/package/@nuxt/a11y',
    website: 'https://github.com/nuxt/a11y',
  },
  source: {
    github: 'nuxt/a11y',
    npm: '@nuxt/a11y',
  },
  stats: {
    stars: 229,
    downloads: {
      monthly: 92885,
      weekly: 23629,
    },
  },
})
