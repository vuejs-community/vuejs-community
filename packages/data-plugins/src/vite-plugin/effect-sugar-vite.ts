import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'effect-sugar-vite',
  description: 'Vite plugin for Effect-TS gen block syntax',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'effect',
    'effect-ts',
    'syntactic-sugar',
    'gen-blocks',
  ],
  links: {
    github: 'https://github.com/clayroach/effect-sugar',
    npm: 'https://www.npmjs.com/package/effect-sugar-vite',
    website: 'https://github.com/clayroach/effect-sugar#readme',
  },
  source: {
    github: 'clayroach/effect-sugar',
    npm: 'effect-sugar-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
