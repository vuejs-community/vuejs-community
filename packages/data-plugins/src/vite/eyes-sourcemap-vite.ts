import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'eyes-sourcemap-vite',
  description: 'A Vite plugin for uploading source maps to monitoring services. Simplify source map management and error tracking in production builds.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'sourcemap',
    'sourcemap-upload',
    'source-map-plugin',
    'vite-source-map',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mobei01/eyes-sourcemap-vite',
    npm: 'https://www.npmjs.com/package/eyes-sourcemap-vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
