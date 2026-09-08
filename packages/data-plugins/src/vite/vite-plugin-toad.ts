import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-toad',
  description: 'Zero runtime CSS-in-JS powered by Vite',
  icon: 'logos:vite-icon',
  version: '0.3.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css-in-js',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-toad',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-toad',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 4,
    },
  },
})
