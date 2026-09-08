import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zopfli',
  description: 'Use `zopfli` to compress resources.',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compress',
    'zopfli',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Team-EPS/vite-plugin-zopfli',
    npm: 'vite-plugin-zopfli',
  },
  links: {
    github: 'https://github.com/Team-EPS/vite-plugin-zopfli',
    npm: 'https://www.npmjs.com/package/vite-plugin-zopfli',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
