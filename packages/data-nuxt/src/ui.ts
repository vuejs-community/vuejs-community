import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ui',
  description: 'The Intuitive UI Library powered by Reka UI and Tailwind CSS.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/ui',
    npm: 'https://npmjs.com/package/@nuxt/ui',
    website: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
  },
  source: {
    github: 'nuxt/ui#dev',
    npm: '@nuxt/ui',
  },
  stats: {
    stars: 6878,
    downloads: {
      monthly: 2117467,
      weekly: 551957,
    },
  },
})
