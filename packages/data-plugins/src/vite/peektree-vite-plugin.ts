import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@peektree/vite-plugin',
  description: 'Vite plugin for peek - any agent, any branch, one command',
  version: '0.4.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ekarya0x/peek',
    npm: 'https://www.npmjs.com/package/@peektree/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 7,
    },
  },
})
