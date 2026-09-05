import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'markdownit',
  description: 'Use Markdown in your Nuxt application with the markdownit-loader',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/markdownit-module',
    npm: 'https://npmjs.com/package/@nuxtjs/markdownit',
    website: 'https://github.com/nuxt-community/markdownit-module',
  },
  source: {
    github: 'nuxt-community/markdownit-module',
    npm: '@nuxtjs/markdownit',
  },
  stats: {
    stars: 49,
    downloads: {
      monthly: 19771,
      weekly: 4396,
    },
  },
})
