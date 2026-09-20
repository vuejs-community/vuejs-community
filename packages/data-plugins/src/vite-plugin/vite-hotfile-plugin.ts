import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-hotfile-plugin',
  description: 'The Vite Hot File Plugin creates a file (vite.hot by default) containing the development server\'s URL. This file is stored in the public directory and is automatically deleted when the server shuts down.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hotfile',
  ],
  links: {
    github: 'https://github.com/neuerituale/vite-hot-file',
    npm: 'https://www.npmjs.com/package/vite-hotfile-plugin',
    website: 'https://github.com/neuerituale/vite-hot-file#readme',
  },
  source: {
    github: 'neuerituale/vite-hot-file',
    npm: 'vite-hotfile-plugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 81,
      weekly: 11,
    },
  },
})
