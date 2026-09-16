import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@raegen/vite-plugin-vitest-cache',
  description: 'Run Vitest with test result caching.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vCache',
    'vite',
    'vitest',
    'vite-plugin',
    'cache',
  ],
  source: {
    github: 'raegen/vitest-cache',
    npm: '@raegen/vite-plugin-vitest-cache',
  },
  links: {
    github: 'https://github.com/raegen/vitest-cache',
    npm: 'https://www.npmjs.com/package/@raegen/vite-plugin-vitest-cache',
    website: 'https://github.com/raegen/vitest-cache#readme',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 1359,
      weekly: 256,
    },
  },
})
