import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-markdownify',
  description: 'Converts markdown files to static html files using an html template and outputs them to a folder.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'markdown',
    'generator',
    'static-site',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-markdownify',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
