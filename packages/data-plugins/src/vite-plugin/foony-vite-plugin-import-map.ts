import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foony/vite-plugin-import-map',
  description: 'Vite plugin that generates import maps to prevent cascading hash changes. Created by foony.com',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'import-map',
    'import-maps',
    'rollup',
    'build',
    'foony',
  ],
  links: {
    github: 'https://github.com/Foony-Limited/vite-plugin-import-map',
    npm: 'https://www.npmjs.com/package/@foony/vite-plugin-import-map',
    website: 'https://github.com/Foony-Limited/vite-plugin-import-map#readme',
  },
  source: {
    github: 'Foony-Limited/vite-plugin-import-map',
    npm: '@foony/vite-plugin-import-map',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
