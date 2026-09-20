import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tomato',
  description: 'Vite plugin for Tomato CSS - import .tom files in React with scoped styles',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/srivtx/tomato-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-tomato',
    website: 'https://github.com/srivtx/tomato-css#vite-plugin',
  },
  source: {
    github: 'srivtx/tomato-css',
    npm: 'vite-plugin-tomato',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
