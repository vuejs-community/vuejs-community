import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@molgenis/vite-plugin-inline',
  description: 'Vite plugin that embeds .js and .css as base85 data ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/molgenis/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/@molgenis/vite-plugin-inline',
    website: 'https://github.com/molgenis/vite-plugin-inline#readme',
  },
  source: {
    github: 'molgenis/vite-plugin-inline',
    npm: '@molgenis/vite-plugin-inline',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 582,
      weekly: 41,
    },
  },
})
