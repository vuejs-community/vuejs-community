import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oxidized-image/vite',
  description: 'A Vite plugin for optimizing images.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'image',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tobynguyen-works/oxidized-image',
    npm: 'https://www.npmjs.com/package/@oxidized-image/vite',
    website: 'https://github.com/tobynguyen-works/oxidized-image#readme',
  },
  source: {
    github: 'tobynguyen-works/oxidized-image',
    npm: '@oxidized-image/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
