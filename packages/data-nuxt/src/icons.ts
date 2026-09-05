import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'icons',
  description: 'Use your own automatically imported SVG icons.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/gitfoxcode/nuxt-icons',
    npm: 'https://npmjs.com/package/nuxt-icons',
    website: 'https://github.com/gitFoxCode/nuxt-icons',
  },
  source: {
    github: 'gitfoxcode/nuxt-icons',
    npm: 'nuxt-icons',
  },
  stats: {
    stars: 196,
    downloads: {
      monthly: 41297,
      weekly: 12017,
    },
  },
})
