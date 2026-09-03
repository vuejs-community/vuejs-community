import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lessmock',
  description: 'A vite plugin that auto generate mock data with fake data for TypeScript interfaces.',
  version: '1.1.0-beta.2',
  category: 'plugin',
  tags: [
    'vite mock',
    'vite-plugin',
    'lessmock',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/satrong/vite-plugin-lessmock',
    npm: 'https://www.npmjs.com/package/vite-plugin-lessmock',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
