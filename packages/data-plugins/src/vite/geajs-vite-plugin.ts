import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@geajs/vite-plugin',
  description: 'Vite plugin for Gea framework - JSX/TSX transform, reactivity, HMR',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'gea',
    'jsx',
    'tsx',
    'reactivity',
    'hmr',
    'transform',
    'compile-time',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dashersw/gea',
    npm: 'https://www.npmjs.com/package/@geajs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1258,
      weekly: 318,
    },
  },
})
