import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@theemo/vite',
  description: 'Plugin for loading themes with vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'design system',
    'theme',
    'design tokens',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theemo-tokens/theemo',
    npm: 'https://www.npmjs.com/package/@theemo/vite',
    website: 'https://theemo.io',
  },
  source: {
    github: 'theemo-tokens/theemo',
    npm: '@theemo/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 223,
      weekly: 80,
    },
  },
})
