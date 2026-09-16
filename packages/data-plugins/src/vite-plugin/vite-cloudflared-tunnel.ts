import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-cloudflared-tunnel',
  description: 'A Vite Plugin on top of cloudflared-tunnel package to serve your localhost to the outside world during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'cloudflare',
    'tunnel',
    'cloudflared',
    'cloudflared-tunnel',
    'vite-plugin',
    'vite-plugin-cloudflared-tunnel',
  ],
  source: {
    github: 'ahmedrowaihi/vite-cloudflared-tunnel',
    npm: 'vite-cloudflared-tunnel',
  },
  links: {
    github: 'https://github.com/ahmedrowaihi/vite-cloudflared-tunnel',
    npm: 'https://www.npmjs.com/package/vite-cloudflared-tunnel',
    website: 'https://github.com/ahmedrowaihi/vite-cloudflared-tunnel',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 6,
    },
  },
})
