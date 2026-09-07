import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitalizer',
  description: 'Instantly better LCP scores in Google Lighthouse',
  icon: 'icon:vitalizer',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-vitalizer',
    npm: 'https://npmjs.com/package/nuxt-vitalizer',
    website: 'https://github.com/johannschopplich/nuxt-vitalizer#readme',
  },
  source: {
    github: 'johannschopplich/nuxt-vitalizer',
    npm: 'nuxt-vitalizer',
  },
  stats: {
    stars: 173,
    downloads: {
      monthly: 86604,
      weekly: 15631,
    },
  },
})
