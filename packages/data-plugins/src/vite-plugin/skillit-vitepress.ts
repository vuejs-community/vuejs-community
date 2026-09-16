import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@skillit/vitepress',
  description: 'VitePress plugin for AI agent skill generation — uses sidebar for document ordering',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-skills',
    'documentation',
    'markdown',
    'sidebar',
    'skill-generation',
    'skill-md',
    'skillit',
    'vite-plugin',
    'vitepress',
  ],
  source: {
    github: 'pradeepmouli/skillit',
    npm: '@skillit/vitepress',
  },
  links: {
    github: 'https://github.com/pradeepmouli/skillit',
    npm: 'https://www.npmjs.com/package/@skillit/vitepress',
    website: 'https://github.com/pradeepmouli/skillit/tree/develop/packages/vitepress#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 78,
      weekly: 4,
    },
  },
})
