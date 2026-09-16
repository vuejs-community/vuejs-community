import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'partisan',
  description: 'Build-time dependency indirection in the style of the Sanity v2 parts system',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'parts',
    'plugin-system',
    'dependency-indirection',
    'sanity',
  ],
  source: {
    github: 'rexxars/partisan',
    npm: 'partisan',
  },
  links: {
    github: 'https://github.com/rexxars/partisan',
    npm: 'https://www.npmjs.com/package/partisan',
    website: 'https://github.com/rexxars/partisan#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
