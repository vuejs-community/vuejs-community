import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@slip-stream-kit/vite',
  description: 'The infra-kit Vite plugin: per-worktree dev port, portless HTTPS alias HMR, and the config-driven dev proxy — wired from one plugin entry, and re-resolved live when a backend comes up.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'infra-kit',
    'vite',
    'vite-plugin',
    'proxy',
    'monorepo',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@slip-stream-kit/vite',
  },
  source: {
    npm: '@slip-stream-kit/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 488,
      weekly: 359,
    },
  },
})
