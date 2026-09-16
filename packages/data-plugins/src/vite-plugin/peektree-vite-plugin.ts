import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@peektree/vite-plugin',
  description: 'Vite plugin for peek - any agent, any branch, one command',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'worktree',
    'hot-reload',
    'hmr',
    'ai',
    'agent',
    'dx',
  ],
  source: {
    github: 'ekarya0x/peek',
    npm: '@peektree/vite-plugin',
  },
  links: {
    github: 'https://github.com/ekarya0x/peek',
    npm: 'https://www.npmjs.com/package/@peektree/vite-plugin',
    website: 'https://github.com/ekarya0x/peek',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
