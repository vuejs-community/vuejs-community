import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@azoth-web/vite-plugin',
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
  links: {
    github: 'https://github.com/azoth-web/azoth',
    npm: 'https://www.npmjs.com/package/@azoth-web/vite-plugin',
    website: 'https://github.com/azoth-web/azoth#readme',
  },
  source: {
    github: 'azoth-web/azoth',
    npm: '@azoth-web/vite-plugin',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
