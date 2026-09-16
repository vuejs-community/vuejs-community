import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vleam',
  description: 'Code using Gleam in Vue projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gleam',
    'vue',
    'vite-plugin',
  ],
  source: {
    github: 'vleam/vleam',
    npm: 'vleam',
  },
  links: {
    github: 'https://github.com/vleam/vleam',
    npm: 'https://www.npmjs.com/package/vleam',
    website: 'https://github.com/vleam/vleam#readme',
  },
  stats: {
    stars: 137,
    downloads: {
      monthly: 39,
      weekly: 14,
    },
  },
})
