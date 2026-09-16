import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svelte-drama/vite-plugin-image-metadata',
  description: 'A Vite plugin that imports image files with their dimensions. Append `?image` to any image import to get back the `src`, `width`, and `height`.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: '@svelte-drama/vite-plugin-image-metadata',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@svelte-drama/vite-plugin-image-metadata',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 97,
      weekly: 17,
    },
  },
})
