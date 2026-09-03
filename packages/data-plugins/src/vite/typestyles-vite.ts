import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@typestyles/vite',
  description: 'Vite plugin for typestyles HMR support',
  version: '0.4.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typestyles',
    'hmr',
    'css-in-js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/type-styles/typestyles',
    npm: 'https://www.npmjs.com/package/@typestyles/vite',
  },
  stats: {
    downloads: {
      monthly: 4316,
      weekly: 160,
    },
  },
})
