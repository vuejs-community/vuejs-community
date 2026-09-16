import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-url',
  description: 'Make ?url imports work for css in vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'swlynch99/vite-plugin-css-url',
    npm: 'vite-plugin-css-url',
  },
  links: {
    github: 'https://github.com/swlynch99/vite-plugin-css-url',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-url',
    website: 'https://github.com/swlynch99/vite-plugin-css-url#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
