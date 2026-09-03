import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pdrittenhouse/vite-plugin-virtual-glob',
  description: 'Vite plugin that creates virtual modules from filesystem globs — solves the static-path limitation of import.meta.glob() when source paths are determined at runtime.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'virtual-module',
    'glob',
    'import',
    'dynamic-import',
    'storybook',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pdrittenhouse/vite-plugin-virtual-glob',
    npm: 'https://www.npmjs.com/package/@pdrittenhouse/vite-plugin-virtual-glob',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 6,
    },
  },
})
