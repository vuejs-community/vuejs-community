import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pure-glyf',
  description: 'Vite plugin and runtime for compiling SVGs into tree-shakeable CSS masks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'icons',
    'svg',
    'css',
    'tree-shaking',
    'vite-plugin',
  ],
  source: {
    github: 'eddow/pure-glyf',
    npm: 'pure-glyf',
  },
  links: {
    github: 'https://github.com/eddow/pure-glyf',
    npm: 'https://www.npmjs.com/package/pure-glyf',
    website: 'https://github.com/eddow/pure-glyf#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
