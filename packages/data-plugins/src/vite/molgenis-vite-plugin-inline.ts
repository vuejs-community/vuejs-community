import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@molgenis/vite-plugin-inline',
  description: 'Vite plugin that embeds .js and .css as base85 data ',
  version: '2.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/molgenis/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/@molgenis/vite-plugin-inline',
  },
  stats: {
    downloads: {
      monthly: 524,
      weekly: 53,
    },
  },
})
