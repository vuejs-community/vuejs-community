import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kapar',
  description: 'Screen recording and screenshot taking via the HTML-in-Canvas API (Vite Plugin)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'html-in-canvas',
    'screen-record',
    'screenshot',
    'canvas',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-kapar',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-kapar',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
