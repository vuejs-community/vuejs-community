import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blurhash',
  description: 'Vite plugin to create blurhash strings for all images inside a certain directory, or from the provided set of images. Hashes are then saved to an output file and stored in vite\'s define global variables.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'blurhash',
  ],
  links: {
    github: 'https://github.com/nickgraffis/vite-plugin-blurhash',
    npm: 'https://www.npmjs.com/package/vite-plugin-blurhash',
    website: 'https://github.com/nickgraffis/vite-plugin-blurhash#readme',
  },
  source: {
    github: 'nickgraffis/vite-plugin-blurhash',
    npm: 'vite-plugin-blurhash',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58,
      weekly: 24,
    },
  },
})
