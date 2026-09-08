import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-url',
  description: 'Make ?url imports work for css in vite',
  icon: 'logos:vite-icon',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'swlynch99/vite-plugin-css-url',
    npm: 'vite-plugin-css-url',
  },
  links: {
    github: 'https://github.com/swlynch99/vite-plugin-css-url',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-url',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
