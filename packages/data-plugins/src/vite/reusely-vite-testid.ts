import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'reusely-vite-testid',
  description: 'Auto-inject data-testid attributes into Vue components at compile time for e2e testing',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'vite-plugin',
    'testid',
    'data-testid',
    'e2e',
    'testing',
    'qa',
    'selector',
    'automation',
    'render-function',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/reusely/reusely-vue-testid',
    npm: 'https://www.npmjs.com/package/reusely-vite-testid',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
