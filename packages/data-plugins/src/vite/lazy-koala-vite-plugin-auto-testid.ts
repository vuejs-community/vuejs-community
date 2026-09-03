import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lazy-koala/vite-plugin-auto-testid',
  description: 'Auto-add data-testid and role attributes to Vue SFC template elements with event handlers',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue',
    'testid',
    'a11y',
    'testing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wk13eagle/vite-plugin-auto-testid',
    npm: 'https://www.npmjs.com/package/@lazy-koala/vite-plugin-auto-testid',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
