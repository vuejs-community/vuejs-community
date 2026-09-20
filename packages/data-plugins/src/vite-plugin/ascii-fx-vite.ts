import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ascii-fx/vite',
  description: 'Vite integration for ASCII FX: build-time profile compilation and static frame generation as virtual modules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ascii',
    'ascii-art',
    'ascii-fx',
    'build-tool',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Amir-Abushanab/ascii-fx',
    npm: 'https://www.npmjs.com/package/@ascii-fx/vite',
    website: 'https://github.com/Amir-Abushanab/ascii-fx#readme',
  },
  source: {
    github: 'Amir-Abushanab/ascii-fx',
    npm: '@ascii-fx/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 980,
      weekly: 342,
    },
  },
})
