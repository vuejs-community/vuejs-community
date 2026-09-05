import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blurhash-sharp-fix-fork',
  description: 'Vite plugin to create blurhash strings for all images inside a certain directory, or from the provided set of images. Hashes are then saved to an output file and stored in vite\'s define global variables.',
  version: '0.2.1',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-blurhash-sharp-fix-fork',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
