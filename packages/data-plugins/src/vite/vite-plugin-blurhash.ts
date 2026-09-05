import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blurhash',
  description: 'Vite plugin to create blurhash strings for all images inside a certain directory, or from the provided set of images. Hashes are then saved to an output file and stored in vite\'s define global variables.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'blurhash',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nickgraffis/vite-plugin-blurhash',
    npm: 'https://www.npmjs.com/package/vite-plugin-blurhash',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 14,
    },
  },
})
