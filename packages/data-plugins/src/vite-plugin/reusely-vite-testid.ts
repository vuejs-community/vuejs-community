import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'reusely-vite-testid',
  description: 'Auto-inject data-testid attributes into Vue components at compile time for e2e testing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'reusely/reusely-vue-testid',
    npm: 'reusely-vite-testid',
  },
  links: {
    github: 'https://github.com/reusely/reusely-vue-testid',
    npm: 'https://www.npmjs.com/package/reusely-vite-testid',
    website: 'https://github.com/reusely/reusely-vue-testid#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
