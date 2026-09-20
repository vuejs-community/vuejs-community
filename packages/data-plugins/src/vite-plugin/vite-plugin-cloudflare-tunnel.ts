import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-tunnel',
  description: 'A Vite plugin that automatically creates and manages Cloudflare tunnels for local development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'tunnel',
    'development',
    'local-development',
  ],
  links: {
    github: 'https://github.com/eastlondoner/vite-plugin-cloudflare-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-tunnel',
    website: 'https://github.com/eastlondoner/vite-plugin-cloudflare-tunnel#readme',
  },
  source: {
    github: 'eastlondoner/vite-plugin-cloudflare-tunnel',
    npm: 'vite-plugin-cloudflare-tunnel',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 1063,
      weekly: 274,
    },
  },
})
