import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'storybook',
  description: 'Easily integrate Storybook in your Nuxt application to design, build, and test your UI components in isolation.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/storybook',
    npm: 'https://npmjs.com/package/@nuxtjs/storybook',
    website: 'https://storybook.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/storybook#main/packages/nuxt-module',
    npm: '@nuxtjs/storybook',
  },
  stats: {
    stars: 488,
    downloads: {
      monthly: 234761,
      weekly: 64046,
    },
  },
})
