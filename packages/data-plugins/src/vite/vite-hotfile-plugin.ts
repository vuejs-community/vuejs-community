import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-hotfile-plugin',
  description: 'The Vite Hot File Plugin creates a file (vite.hot by default) containing the development server\'s URL. This file is stored in the public directory and is automatically deleted when the server shuts down.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hotfile',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/neuerituale/vite-hot-file',
    npm: 'https://www.npmjs.com/package/vite-hotfile-plugin',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 37,
    },
  },
})
