import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-headerless',
  description: 'Vite plugin that strips format-defining header fields from binary assets at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'firejune/headerless',
    npm: 'vite-plugin-headerless',
  },
  links: {
    github: 'https://github.com/firejune/headerless',
    npm: 'https://www.npmjs.com/package/vite-plugin-headerless',
    website: 'https://github.com/firejune/headerless#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 791,
      weekly: 16,
    },
  },
})
