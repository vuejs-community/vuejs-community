import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vike-content-collection',
  description: 'Content collection plugin for Vike + Vite with zod schema validation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vike',
    'content-collection',
    'markdown',
    'frontmatter',
    'zod',
  ],
  source: {
    github: 'welpie21/vike-content-collection',
    npm: 'vike-content-collection',
  },
  links: {
    github: 'https://github.com/welpie21/vike-content-collection',
    npm: 'https://www.npmjs.com/package/vike-content-collection',
    website: 'https://github.com/welpie21/vike-content-collection#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4778,
      weekly: 788,
    },
  },
})
