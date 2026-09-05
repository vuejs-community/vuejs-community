import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flexium',
  description: 'Vite plugin for Flexium - JSX transform, HMR, and dev tools integration',
  version: '0.18.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'flexium',
    'signals',
    'reactive',
    'jsx',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Wick-Lim/flexium.js',
    npm: 'https://www.npmjs.com/package/vite-plugin-flexium',
  },
  stats: {
    downloads: {
      monthly: 199,
      weekly: 4,
    },
  },
})
