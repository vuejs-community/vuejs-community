import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@geajs/vite-plugin',
  description: 'Vite plugin for Gea framework - JSX/TSX transform, reactivity, HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'dashersw/gea',
    npm: '@geajs/vite-plugin',
  },
  links: {
    github: 'https://github.com/dashersw/gea',
    npm: 'https://www.npmjs.com/package/@geajs/vite-plugin',
    website: 'https://github.com/dashersw/gea#readme',
  },
  stats: {
    stars: 1246,
    downloads: {
      monthly: 1026,
      weekly: 245,
    },
  },
})
