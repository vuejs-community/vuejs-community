import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mettle',
  description: 'Mettle.js integration plugin for vite',
  icon: 'logos:vite-icon',
  version: '1.9.0',
  category: 'plugin',
  tags: [
    'mettle',
    'mettle-js',
    'vite',
    'vite-plugin-mettle',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'maomincoding/babel-plugin-mettle',
    npm: 'vite-plugin-mettle',
  },
  links: {
    github: 'https://github.com/maomincoding/babel-plugin-mettle',
    npm: 'https://www.npmjs.com/package/vite-plugin-mettle',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 7,
    },
  },
})
