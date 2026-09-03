import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@patu.dev/vite',
  description: 'Vite plugin that optimizes the build output through the Patu API.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'patu',
    'vite',
    'vite-plugin',
    'image-optimization',
    'avif',
    'webp',
    'cdn',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Gheop/patu-js',
    npm: 'https://www.npmjs.com/package/@patu.dev/vite',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 0,
    },
  },
})
