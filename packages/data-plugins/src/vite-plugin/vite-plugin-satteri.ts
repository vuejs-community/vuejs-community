import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-satteri',
  description: 'Vite plugin for processing Markdown and MDX with Sätteri',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'mdx',
    'satteri',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bruits/satteri',
    npm: 'https://www.npmjs.com/package/vite-plugin-satteri',
    website: 'https://github.com/bruits/satteri#readme',
  },
  source: {
    github: 'bruits/satteri',
    npm: 'vite-plugin-satteri',
  },
  stats: {
    stars: 1257,
    downloads: {
      monthly: 8895,
      weekly: 1871,
    },
  },
})
