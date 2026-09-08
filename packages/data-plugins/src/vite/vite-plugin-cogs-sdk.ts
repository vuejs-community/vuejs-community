import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cogs-sdk',
  description: 'A Vite plugin to easily setup your project to be a COGS plugin or custom content',
  icon: 'logos:vite-icon',
  version: '3.2.1',
  category: 'plugin',
  tags: [
    'cogs',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'clockwork-dog/cogs-sdk',
    npm: 'vite-plugin-cogs-sdk',
  },
  links: {
    github: 'https://github.com/clockwork-dog/cogs-sdk',
    npm: 'https://www.npmjs.com/package/vite-plugin-cogs-sdk',
  },
  stats: {
    downloads: {
      monthly: 208,
      weekly: 4,
    },
  },
})
