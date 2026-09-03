import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@svelte-drama/vite-plugin-image-metadata',
  description: 'A Vite plugin that imports image files with their dimensions. Append `?image` to any image import to get back the `src`, `width`, and `height`.',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@svelte-drama/vite-plugin-image-metadata',
  },
  stats: {
    downloads: {
      monthly: 123,
      weekly: 23,
    },
  },
})
