import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-tunnel',
  description: 'A Vite plugin that automatically creates and manages Cloudflare tunnels for local development',
  icon: 'logos:vite-icon',
  version: '1.0.12',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'tunnel',
    'development',
    'local-development',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'eastlondoner/vite-plugin-cloudflare-tunnel',
    npm: 'vite-plugin-cloudflare-tunnel',
  },
  links: {
    github: 'https://github.com/eastlondoner/vite-plugin-cloudflare-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-tunnel',
  },
  stats: {
    downloads: {
      monthly: 1294,
      weekly: 177,
    },
  },
})
