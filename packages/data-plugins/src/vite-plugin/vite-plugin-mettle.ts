import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mettle',
  description: 'Mettle.js integration plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mettle',
    'mettle-js',
    'vite',
    'vite-plugin-mettle',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maomincoding/babel-plugin-mettle',
    npm: 'https://www.npmjs.com/package/vite-plugin-mettle',
    website: 'https://github.com/maomincoding/babel-plugin-mettle#readme',
  },
  source: {
    github: 'maomincoding/babel-plugin-mettle',
    npm: 'vite-plugin-mettle',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 31,
      weekly: 8,
    },
  },
})
