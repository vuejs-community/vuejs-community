import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sweetroll/vite-plugin-assethash',
  description: 'A Vite plugin to hash files from specified directories and add them to the Rollup manifest.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sweetroll/vite-plugin-assethash',
    npm: 'https://www.npmjs.com/package/@sweetroll/vite-plugin-assethash',
  },
  stats: {
    downloads: {
      monthly: 51,
      weekly: 15,
    },
  },
})
