import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eakl/vite-plugin-inline-source',
  description: 'Inline JS and CSS in HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inline',
    'inline-source',
  ],
  links: {
    github: 'https://github.com/eakl/vite-plugin-inline-source',
    npm: 'https://www.npmjs.com/package/@eakl/vite-plugin-inline-source',
    website: 'https://github.com/eakl/vite-plugin-inline-source#readme',
  },
  source: {
    github: 'eakl/vite-plugin-inline-source',
    npm: '@eakl/vite-plugin-inline-source',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
