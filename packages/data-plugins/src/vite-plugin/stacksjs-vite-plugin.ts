import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stacksjs/vite-plugin',
  description: 'The Stacks Vite plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'configs',
    'vite-plugin',
    'stacks',
  ],
  links: {
    github: 'https://github.com/stacksjs/stacks',
    npm: 'https://www.npmjs.com/package/@stacksjs/vite-plugin',
    website: 'https://github.com/stacksjs/stacks/tree/main/storage/framework/core/vite#readme',
  },
  source: {
    github: 'stacksjs/stacks',
    npm: '@stacksjs/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 185,
      weekly: 3,
    },
  },
})
