import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vertesia/plugin-builder',
  description: 'A vite plugin to build vertesia UI plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vertesia',
    'plugin',
    'vite',
    'vite-plugin',
    'ui',
    'react',
    'css',
    'tailwind',
  ],
  links: {
    github: 'https://github.com/vertesia/composableai',
    npm: 'https://www.npmjs.com/package/@vertesia/plugin-builder',
    website: 'https://docs.vertesiahq.com',
  },
  source: {
    github: 'vertesia/composableai',
    npm: '@vertesia/plugin-builder',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2548,
      weekly: 658,
    },
  },
})
