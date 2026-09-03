import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'node-console-link',
  description: 'Auto-inject console.log into business functions for Vue2/Vue3 projects',
  version: '2.0.6',
  category: 'plugin',
  tags: [
    'console',
    'debug',
    'vue',
    'webpack-loader',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Ethan66/node-console-link',
    npm: 'https://www.npmjs.com/package/node-console-link',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 4,
    },
  },
})
