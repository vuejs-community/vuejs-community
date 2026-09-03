import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'waipoint',
  description: 'Point at a UI element, copy `Name @ file:line`, paste to your AI agent. Your tokens are precious. Point, don\'t describe.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'ai',
    'claude',
    'inspector',
    'vite-plugin',
    'devtool',
    'vibe-coding',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/larsien/waipoint',
    npm: 'https://www.npmjs.com/package/waipoint',
  },
  stats: {
    downloads: {
      monthly: 321,
      weekly: 158,
    },
  },
})
