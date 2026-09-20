import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@leafphp/vite-plugin',
  description: 'Leaf plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'leafphp',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leafsphp/vite-plugin',
    npm: 'https://www.npmjs.com/package/@leafphp/vite-plugin',
    website: 'https://github.com/leafsphp/vite-plugin',
  },
  source: {
    github: 'leafsphp/vite-plugin',
    npm: '@leafphp/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 55,
      weekly: 11,
    },
  },
})
