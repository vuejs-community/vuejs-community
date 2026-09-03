import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ascii-fx/vite',
  description: 'Vite integration for ASCII FX: build-time profile compilation and static frame generation as virtual modules.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'ascii',
    'ascii-art',
    'ascii-fx',
    'build-tool',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Amir-Abushanab/ascii-fx',
    npm: 'https://www.npmjs.com/package/@ascii-fx/vite',
  },
  stats: {
    downloads: {
      monthly: 418,
      weekly: 418,
    },
  },
})
