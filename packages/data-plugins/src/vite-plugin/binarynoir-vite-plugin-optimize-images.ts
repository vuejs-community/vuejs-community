import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binarynoir/vite-plugin-optimize-images',
  description: 'A Vite plugin that optimizes PNG, JPEG, and WebP images as they\'re written to the dist bundle, using sharp — without ever touching your source files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'images',
    'image-optimization',
    'sharp',
    'build',
    'performance',
  ],
  links: {
    github: 'https://github.com/binarynoir/vite-plugin-optimize-images',
    npm: 'https://www.npmjs.com/package/@binarynoir/vite-plugin-optimize-images',
    website: 'https://github.com/binarynoir/vite-plugin-optimize-images#readme',
  },
  source: {
    github: 'binarynoir/vite-plugin-optimize-images',
    npm: '@binarynoir/vite-plugin-optimize-images',
  },
})
