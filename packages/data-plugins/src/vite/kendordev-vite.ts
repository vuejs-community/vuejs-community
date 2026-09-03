import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kendordev/vite',
  description: 'Vite plugin that makes a dev server reachable + HMR-correct through the Kendor sandbox reverse proxy. No-op off-platform, so it is safe to commit to any repo.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'kendor',
    'hmr',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@kendordev/vite',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 20,
    },
  },
})
