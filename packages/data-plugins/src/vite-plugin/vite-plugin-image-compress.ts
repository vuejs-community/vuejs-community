import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-compress',
  description: 'You can add it as a dev dependency to any of the package managers (NPM, Yarn, PNPM)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sharp.js',
  ],
  source: {
    npm: 'vite-plugin-image-compress',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-image-compress',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
