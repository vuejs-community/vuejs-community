import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cogs-sdk',
  description: 'A Vite plugin to easily setup your project to be a COGS plugin or custom content',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cogs',
    'vite-plugin',
  ],
  source: {
    github: 'clockwork-dog/cogs-sdk',
    npm: 'vite-plugin-cogs-sdk',
  },
  links: {
    github: 'https://github.com/clockwork-dog/cogs-sdk',
    npm: 'https://www.npmjs.com/package/vite-plugin-cogs-sdk',
    website: 'https://github.com/clockwork-dog/cogs-sdk/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 179,
      weekly: 18,
    },
  },
})
