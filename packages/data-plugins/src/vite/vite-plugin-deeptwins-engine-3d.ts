import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deeptwins-engine-3d',
  description: 'A Vite plugin that serves `deeptwins-engine-3d` runtime assets in development and copies the required files into the build output.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-deeptwins-engine-3d',
  },
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
