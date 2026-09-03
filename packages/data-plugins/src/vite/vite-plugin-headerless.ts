import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-headerless',
  description: 'Vite plugin that strips format-defining header fields from binary assets at build time',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'assets',
    'binary',
    'protection',
    'datamining',
    'capacitor',
    'electron',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/firejune/headerless',
    npm: 'https://www.npmjs.com/package/vite-plugin-headerless',
  },
  stats: {
    downloads: {
      monthly: 945,
      weekly: 407,
    },
  },
})
