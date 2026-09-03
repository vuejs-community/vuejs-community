import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kapar',
  description: 'Screen recording and screenshot taking via the HTML-in-Canvas API (Vite Plugin)',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'html-in-canvas',
    'screen-record',
    'screenshot',
    'canvas',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-kapar',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
