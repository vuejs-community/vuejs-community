import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@seboran/vue-coverage-overlay',
  description: 'Vite plugin to visualize Vue component test coverage directly on the page',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'coverage',
    'vitest',
    'testing',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Seboran/tolstoi',
    npm: 'https://www.npmjs.com/package/@seboran/vue-coverage-overlay',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
