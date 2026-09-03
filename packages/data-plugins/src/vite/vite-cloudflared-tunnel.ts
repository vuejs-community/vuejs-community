import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-cloudflared-tunnel',
  description: 'A Vite Plugin on top of cloudflared-tunnel package to serve your localhost to the outside world during development.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'cloudflare',
    'tunnel',
    'cloudflared',
    'cloudflared-tunnel',
    'vite-plugin',
    'vite-plugin-cloudflared-tunnel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ahmedrowaihi/vite-cloudflared-tunnel',
    npm: 'https://www.npmjs.com/package/vite-cloudflared-tunnel',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
