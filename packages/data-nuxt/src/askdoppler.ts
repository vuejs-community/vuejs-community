import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'askdoppler',
  description: 'Monitor impressions coming from ChatGPT, Perplexity and others in your Nuxt app with this integration of Doppler.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/askdoppler/doppler-js',
    npm: 'https://npmjs.com/package/@askdoppler/nuxt',
    website: 'https://askdoppler.com',
  },
  source: {
    github: 'askdoppler/doppler-js#main/nuxt',
    npm: '@askdoppler/nuxt',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 362,
      weekly: 94,
    },
  },
})
