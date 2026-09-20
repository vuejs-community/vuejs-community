import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fracipolla/clarity',
  description: 'A minimal reactive UI framework with compiler-driven syntax',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'reactive',
    'ui',
    'framework',
    'compiler',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fracipolla/clarity',
  },
  source: {
    npm: '@fracipolla/clarity',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 60,
      weekly: 2,
    },
  },
})
