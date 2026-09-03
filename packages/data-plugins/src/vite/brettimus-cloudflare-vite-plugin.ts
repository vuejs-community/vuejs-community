import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'brettimus-cloudflare-vite-plugin',
  description: 'Cloudflare plugin for Vite',
  version: '1.7.11',
  category: 'plugin',
  tags: [
    'cloudflare',
    'workers',
    'cloudflare-workers',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cloudflare/workers-sdk',
    npm: 'https://www.npmjs.com/package/brettimus-cloudflare-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 7,
    },
  },
})
