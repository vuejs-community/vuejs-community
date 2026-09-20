import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@patu.dev/vite',
  description: 'Vite plugin that optimizes the build output through the Patu API.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'patu',
    'vite',
    'vite-plugin',
    'image-optimization',
    'avif',
    'webp',
    'cdn',
  ],
  links: {
    github: 'https://github.com/Gheop/patu-js',
    npm: 'https://www.npmjs.com/package/@patu.dev/vite',
    website: 'https://github.com/Gheop/patu-js/tree/main/packages/vite#readme',
  },
  source: {
    github: 'Gheop/patu-js',
    npm: '@patu.dev/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
