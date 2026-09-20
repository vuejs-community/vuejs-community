import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'brettimus-cloudflare-vite-plugin',
  description: 'Cloudflare plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare',
    'workers',
    'cloudflare-workers',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cloudflare/workers-sdk',
    npm: 'https://www.npmjs.com/package/brettimus-cloudflare-vite-plugin',
    website: 'https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin-cloudflare#readme',
  },
  source: {
    github: 'cloudflare/workers-sdk',
    npm: 'brettimus-cloudflare-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
