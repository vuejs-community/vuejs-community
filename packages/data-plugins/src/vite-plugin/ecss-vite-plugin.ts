import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ecss/vite-plugin',
  description: 'ECSS Vite plugin — transforms .ecss files into CSS + JS with HMR support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'ecss',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'webeach/ecss',
    npm: '@ecss/vite-plugin',
  },
  links: {
    github: 'https://github.com/webeach/ecss',
    npm: 'https://www.npmjs.com/package/@ecss/vite-plugin',
    website: 'https://ecss.webea.ch',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
