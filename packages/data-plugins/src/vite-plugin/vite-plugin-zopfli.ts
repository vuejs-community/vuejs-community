import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zopfli',
  description: 'Use `zopfli` to compress resources.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compress',
    'zopfli',
  ],
  source: {
    github: 'Team-EPS/vite-plugin-zopfli',
    npm: 'vite-plugin-zopfli',
  },
  links: {
    github: 'https://github.com/Team-EPS/vite-plugin-zopfli',
    npm: 'https://www.npmjs.com/package/vite-plugin-zopfli',
    website: 'https://github.com/Team-EPS/vite-plugin-zopfli#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
