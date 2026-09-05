import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-ollama',
  description: 'Simple integration of the official Ollama JavaScript Library for your Nuxt application.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/thoda-dev/nuxt-ollama',
    npm: 'https://npmjs.com/package/nuxt-ollama',
    website: 'https://nuxt-ollama.jericho.dev/',
  },
  source: {
    github: 'thoda-dev/nuxt-ollama',
    npm: 'nuxt-ollama',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 1149,
      weekly: 259,
    },
  },
})
