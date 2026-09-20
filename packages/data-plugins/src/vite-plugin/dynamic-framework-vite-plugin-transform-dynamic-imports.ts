import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dynamic-framework/vite-plugin-transform-dynamic-imports',
  description: 'Vite plugin that transforms dynamic imports to use runtime-configurable base paths for widget delivery',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dynamic-imports',
    'code-splitting',
    'widgets',
    'modyo',
    'rollup',
  ],
  links: {
    github: 'https://github.com/dynamic-framework/vite-plugin-transform-dynamic-imports',
    npm: 'https://www.npmjs.com/package/@dynamic-framework/vite-plugin-transform-dynamic-imports',
    website: 'https://github.com/dynamic-framework/vite-plugin-transform-dynamic-imports#readme',
  },
  source: {
    github: 'dynamic-framework/vite-plugin-transform-dynamic-imports',
    npm: '@dynamic-framework/vite-plugin-transform-dynamic-imports',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 187,
      weekly: 5,
    },
  },
})
