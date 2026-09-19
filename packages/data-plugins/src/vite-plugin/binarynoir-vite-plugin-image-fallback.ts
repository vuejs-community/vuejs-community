import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binarynoir/vite-plugin-image-fallback',
  description: 'A Vite plugin that swaps a broken relative/root-relative image import for a placeholder SVG at build time, instead of failing the whole build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'images',
    'fallback',
    'placeholder',
    'build',
  ],
  source: {
    github: 'binarynoir/vite-plugin-image-fallback',
    npm: '@binarynoir/vite-plugin-image-fallback',
  },
  links: {
    github: 'https://github.com/binarynoir/vite-plugin-image-fallback',
    npm: 'https://www.npmjs.com/package/@binarynoir/vite-plugin-image-fallback',
    website: 'https://github.com/binarynoir/vite-plugin-image-fallback#readme',
  },
})
