import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nebula-db/vite-plugin',
  description: 'Vite plugin for NebulaDB',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'database',
    'nosql',
    'nebula',
  ],
  links: {
    github: 'https://github.com/Nom-nom-hub/NebulaDB',
    npm: 'https://www.npmjs.com/package/@nebula-db/vite-plugin',
    website: 'https://github.com/Nom-nom-hub/NebulaDB#readme',
  },
  source: {
    github: 'Nom-nom-hub/NebulaDB',
    npm: '@nebula-db/vite-plugin',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 25,
      weekly: 4,
    },
  },
})
