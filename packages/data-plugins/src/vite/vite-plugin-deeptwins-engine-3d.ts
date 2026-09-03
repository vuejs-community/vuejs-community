import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deeptwins-engine-3d',
  description: 'A Vite plugin that serves `deeptwins-engine-3d` runtime assets in development and copies the required files into the build output.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'deeptwins',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-deeptwins-engine-3d',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
