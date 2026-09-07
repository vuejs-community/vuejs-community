import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-gpt',
  description: 'Plug and Play ChatGPT for Nuxt.',
  icon: 'icon:nuxt-gpt',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/holux-design/nuxt-GPT',
    npm: 'https://npmjs.com/package/nuxt-gpt',
    website: 'https://nuxt-gpt-module.vercel.app/',
  },
  source: {
    github: 'holux-design/nuxt-GPT',
    npm: 'nuxt-gpt',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 64,
      weekly: 16,
    },
  },
})
