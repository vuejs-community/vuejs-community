import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@styils/vite-plugin',
  description: 'vite plugin styils',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'babel',
    'babel-plugin',
    'vite-plugin',
    'vite-plugin-styils',
    'styils',
    'styils-plugin',
    'styils-babel-plugin',
    'source-map',
  ],
  links: {
    github: 'https://github.com/styils/styils',
    npm: 'https://www.npmjs.com/package/@styils/vite-plugin',
    website: 'https://github.com/styils/styils',
  },
  source: {
    github: 'styils/styils',
    npm: '@styils/vite-plugin',
  },
  stats: {
    stars: 57,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
