import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tomato',
  description: 'Vite plugin for Tomato CSS - import .tom files in React with scoped styles',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tomato-css',
    'css',
    'scoped-styles',
    'css-in-js',
    'react',
    'vue',
    'styling',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/srivtx/tomato-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-tomato',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
