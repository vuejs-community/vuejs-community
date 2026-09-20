import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pr0ger/vite-plugin-tailscale-funnel',
  description: 'Vite plugin that starts Tailscale Funnel or Serve when the dev server starts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailscale',
    'funnel',
    'tunnel',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/Pr0Ger/vite-plugin-tailscale-funnel',
    npm: 'https://www.npmjs.com/package/@pr0ger/vite-plugin-tailscale-funnel',
    website: 'https://github.com/Pr0Ger/vite-plugin-tailscale-funnel#readme',
  },
  source: {
    github: 'Pr0Ger/vite-plugin-tailscale-funnel',
    npm: '@pr0ger/vite-plugin-tailscale-funnel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
