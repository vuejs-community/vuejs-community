import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lazy-koala/vite-plugin-auto-testid',
  description: 'Auto-add data-testid and role attributes to Vue SFC template elements with event handlers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue',
    'testid',
    'a11y',
    'testing',
  ],
  source: {
    github: 'wk13eagle/vite-plugin-auto-testid',
    npm: '@lazy-koala/vite-plugin-auto-testid',
  },
  links: {
    github: 'https://github.com/wk13eagle/vite-plugin-auto-testid',
    npm: 'https://www.npmjs.com/package/@lazy-koala/vite-plugin-auto-testid',
    website: 'https://github.com/wk13eagle/vite-plugin-auto-testid#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
