import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@siete/vite',
  description: 'Vite plugin for siete',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'siete',
    'cms',
    'content management',
    'access control',
    'admin',
    'agnostic',
    'framework',
    'headless',
    'restful',
    'self hosted',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'jm2097/siete',
    npm: '@siete/vite',
  },
  links: {
    github: 'https://github.com/jm2097/siete',
    npm: 'https://www.npmjs.com/package/@siete/vite',
    website: 'https://github.com/jm2097/siete/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
