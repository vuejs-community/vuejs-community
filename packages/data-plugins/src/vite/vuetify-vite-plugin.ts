import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vuetify-vite-plugin',
  description: 'Vite plugin for Vuetify 4 — tree-shaking auto-import, styles, and labs. No legacy loader-shared dependency.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vuetify',
    'vuetify4',
    'tree-shaking',
    'auto-import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/thegrowthtech/vuetify-vite-plugin',
    npm: 'https://www.npmjs.com/package/vuetify-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 18,
    },
  },
})
