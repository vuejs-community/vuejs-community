import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purge-bootstrap-icons',
  description: 'Vite plugin to remove unused Bootstrap Icons from your bundle',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purge',
    'bootstrap',
    'icons',
    'bootstrap-icons',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Mexican-Man/vite-plugin-purge-bootstrap-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-purge-bootstrap-icons',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
