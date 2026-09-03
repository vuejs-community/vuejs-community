import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@slip-stream-kit/vite',
  description: 'The infra-kit Vite plugin: per-worktree dev port, portless HTTPS alias HMR, and the config-driven dev proxy — wired from one plugin entry, and re-resolved live when a backend comes up.',
  version: '0.3.13',
  category: 'plugin',
  tags: [
    'infra-kit',
    'vite',
    'vite-plugin',
    'proxy',
    'monorepo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@slip-stream-kit/vite',
  },
  stats: {
    downloads: {
      monthly: 372,
      weekly: 35,
    },
  },
})
