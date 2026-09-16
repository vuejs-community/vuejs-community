import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deeptwins-engine-3d',
  description: 'A Vite plugin that serves `deeptwins-engine-3d` runtime assets in development and copies the required files into the build output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'deeptwins',
  ],
  source: {
    npm: 'vite-plugin-deeptwins-engine-3d',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-deeptwins-engine-3d',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
