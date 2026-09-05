import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'content',
  description: 'The file-based CMS with support for Markdown, YAML, JSON.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/content',
    npm: 'https://npmjs.com/package/@nuxt/content',
    website: 'https://content.nuxt.com',
  },
  source: {
    github: 'nuxt/content#main',
    npm: '@nuxt/content',
  },
  stats: {
    stars: 3663,
    downloads: {
      monthly: 675499,
      weekly: 170757,
    },
  },
})
