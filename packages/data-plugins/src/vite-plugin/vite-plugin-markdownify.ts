import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-markdownify',
  description: 'Converts markdown files to static html files using an html template and outputs them to a folder.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'markdown',
    'generator',
    'static-site',
  ],
  source: {
    npm: 'vite-plugin-markdownify',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-markdownify',
    website: 'https://github.com/codingfriend1/vite-plugin-markdownify#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
