import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'humans-txt',
  description: 'An initiative for knowing the people behind a website. It is a Nuxt buildModules that add a TXT file containing information about the different people who have contributed to building the website.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Luxdamore/nuxt-humans-txt',
    npm: 'https://npmjs.com/package/@luxdamore/nuxt-humans-txt',
    website: 'https://luxdamore.github.io/nuxt-humans-txt/',
  },
  source: {
    github: 'Luxdamore/nuxt-humans-txt',
    npm: '@luxdamore/nuxt-humans-txt',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 239,
      weekly: 65,
    },
  },
})
