import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kendordev/vite',
  description: 'Vite plugin that makes a dev server reachable + HMR-correct through the Kendor sandbox reverse proxy. No-op off-platform, so it is safe to commit to any repo.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'kendor',
    'hmr',
    'proxy',
  ],
  source: {
    npm: '@kendordev/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@kendordev/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 5,
    },
  },
})
