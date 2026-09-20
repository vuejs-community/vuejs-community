import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'waipoint',
  description: 'Point at a UI element, copy `Name @ file:line`, paste to your AI agent. Your tokens are precious. Point, don\'t describe.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ai',
    'claude',
    'inspector',
    'vite-plugin',
    'devtool',
    'vibe-coding',
  ],
  links: {
    github: 'https://github.com/larsien/waipoint',
    npm: 'https://www.npmjs.com/package/waipoint',
    website: 'https://github.com/larsien/waipoint',
  },
  source: {
    github: 'larsien/waipoint',
    npm: 'waipoint',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 247,
      weekly: 5,
    },
  },
})
