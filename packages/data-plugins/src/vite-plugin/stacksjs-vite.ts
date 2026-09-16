import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stacksjs/vite',
  description: 'The Stacks Vite plugin.',
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
  source: {
    github: 'stacksjs/stacks',
    npm: '@stacksjs/vite',
  },
  links: {
    github: 'https://github.com/stacksjs/stacks',
    npm: 'https://www.npmjs.com/package/@stacksjs/vite',
    website: 'https://github.com/stacksjs/stacks/tree/main/storage/framework/core/vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 76,
      weekly: 5,
    },
  },
})
