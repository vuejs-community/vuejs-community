import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vituum',
  description: 'Fast Prototyping with Template Engines in Vite. Small and fast static site generator for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vituum',
    npm: 'https://www.npmjs.com/package/vituum',
    website: 'https://github.com/vituum/vituum#readme',
  },
  source: {
    github: 'vituum/vituum',
    npm: 'vituum',
  },
  stats: {
    stars: 366,
    downloads: {
      monthly: 19119,
      weekly: 2031,
    },
  },
})
