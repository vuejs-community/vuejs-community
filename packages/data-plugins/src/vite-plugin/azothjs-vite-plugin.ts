import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@azothjs/vite-plugin',
  description: 'azoth plugins for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'azoth',
    'azoth plugins',
  ],
  source: {
    github: 'azothjs/azoth',
    npm: '@azothjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/azothjs/azoth',
    npm: 'https://www.npmjs.com/package/@azothjs/vite-plugin',
    website: 'https://github.com/azothjs/azoth#readme',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 49,
      weekly: 3,
    },
  },
})
