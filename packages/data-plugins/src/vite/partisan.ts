import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'partisan',
  description: 'Build-time dependency indirection in the style of the Sanity v2 parts system',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'parts',
    'plugin-system',
    'dependency-indirection',
    'sanity',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rexxars/partisan',
    npm: 'https://www.npmjs.com/package/partisan',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 8,
    },
  },
})
