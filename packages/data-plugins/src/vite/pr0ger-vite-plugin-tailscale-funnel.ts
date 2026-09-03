import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pr0ger/vite-plugin-tailscale-funnel',
  description: 'Vite plugin that starts Tailscale Funnel or Serve when the dev server starts',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailscale',
    'funnel',
    'tunnel',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Pr0Ger/vite-plugin-tailscale-funnel',
    npm: 'https://www.npmjs.com/package/@pr0ger/vite-plugin-tailscale-funnel',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
