import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lessmock',
  description: 'A vite plugin that auto generate mock data with fake data for TypeScript interfaces.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite mock',
    'vite-plugin',
    'lessmock',
  ],
  source: {
    github: 'satrong/vite-plugin-lessmock',
    npm: 'vite-plugin-lessmock',
  },
  links: {
    github: 'https://github.com/satrong/vite-plugin-lessmock',
    npm: 'https://www.npmjs.com/package/vite-plugin-lessmock',
    website: 'https://github.com/satrong/vite-plugin-lessmock/tree/main/#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
