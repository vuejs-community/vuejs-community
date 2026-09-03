import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@miyaoka/vite-plugin-doc-block',
  description: 'Vite plugin to strip <doc> custom blocks from Vue SFC',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'sfc',
    'doc',
    'documentation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/miyaoka/vite-plugin-doc-block',
    npm: 'https://www.npmjs.com/package/@miyaoka/vite-plugin-doc-block',
  },
  stats: {
    downloads: {
      monthly: 677,
      weekly: 320,
    },
  },
})
