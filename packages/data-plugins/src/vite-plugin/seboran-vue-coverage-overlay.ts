import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@seboran/vue-coverage-overlay',
  description: 'Vite plugin to visualize Vue component test coverage directly on the page',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'coverage',
    'vitest',
    'testing',
    'devtools',
  ],
  links: {
    github: 'https://github.com/Seboran/tolstoi',
    npm: 'https://www.npmjs.com/package/@seboran/vue-coverage-overlay',
    website: 'https://github.com/Seboran/tolstoi#readme',
  },
  source: {
    github: 'Seboran/tolstoi',
    npm: '@seboran/vue-coverage-overlay',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
