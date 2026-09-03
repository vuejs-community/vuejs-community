import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dynamic-framework/vite-plugin-transform-dynamic-imports',
  description: 'Vite plugin that transforms dynamic imports to use runtime-configurable base paths for widget delivery',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dynamic-imports',
    'code-splitting',
    'widgets',
    'modyo',
    'rollup',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dynamic-framework/vite-plugin-transform-dynamic-imports',
    npm: 'https://www.npmjs.com/package/@dynamic-framework/vite-plugin-transform-dynamic-imports',
  },
  stats: {
    downloads: {
      monthly: 175,
      weekly: 19,
    },
  },
})
