import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purge-bootstrap-icons',
  description: 'Vite plugin to remove unused Bootstrap Icons from your bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purge',
    'bootstrap',
    'icons',
    'bootstrap-icons',
  ],
  links: {
    github: 'https://github.com/Mexican-Man/vite-plugin-purge-bootstrap-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-purge-bootstrap-icons',
    website: 'https://github.com/Mexican-Man/vite-plugin-purge-bootstrap-icons#readme',
  },
  source: {
    github: 'Mexican-Man/vite-plugin-purge-bootstrap-icons',
    npm: 'vite-plugin-purge-bootstrap-icons',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
