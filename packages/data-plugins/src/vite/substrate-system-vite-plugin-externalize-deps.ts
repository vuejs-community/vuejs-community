import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@substrate-system/vite-plugin-externalize-deps',
  description: 'A configurable Vite plugin to help externalize your dependencies (includes subpaths)',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'dependencies',
    'dev',
    'utils',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/substrate-system/vite-plugin-externalize-deps',
    npm: 'https://www.npmjs.com/package/@substrate-system/vite-plugin-externalize-deps',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 6,
    },
  },
})
