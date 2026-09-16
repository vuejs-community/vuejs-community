import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pdrittenhouse/vite-plugin-virtual-glob',
  description: 'Vite plugin that creates virtual modules from filesystem globs — solves the static-path limitation of import.meta.glob() when source paths are determined at runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'virtual-module',
    'glob',
    'import',
    'dynamic-import',
    'storybook',
  ],
  source: {
    github: 'pdrittenhouse/vite-plugin-virtual-glob',
    npm: '@pdrittenhouse/vite-plugin-virtual-glob',
  },
  links: {
    github: 'https://github.com/pdrittenhouse/vite-plugin-virtual-glob',
    npm: 'https://www.npmjs.com/package/@pdrittenhouse/vite-plugin-virtual-glob',
    website: 'https://github.com/pdrittenhouse/vite-plugin-virtual-glob#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
