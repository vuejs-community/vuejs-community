import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@flickjs/vite-plugin',
  description: 'Vite plugin for Flick framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'flick',
    'jsx',
    'compiler',
    'reactive',
  ],
  source: {
    github: 'jaymalave/flick',
    npm: '@flickjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/jaymalave/flick',
    npm: 'https://www.npmjs.com/package/@flickjs/vite-plugin',
    website: 'https://github.com/jaymalave/flick#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
