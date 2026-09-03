import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-chunks-plugin',
  description: 'Generate per-entry HTML partials and a chunks manifest for Vite 8 builds',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'chunks',
    'entrypoints',
    'manifest',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tyteen4a03/vite-chunks-plugin',
    npm: 'https://www.npmjs.com/package/vite-chunks-plugin',
  },
  stats: {
    downloads: {
      monthly: 8187,
      weekly: 2747,
    },
  },
})
