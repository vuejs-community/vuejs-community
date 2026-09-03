import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@abuiles/vite-plugin',
  description: 'Cloudflare plugin for Vite',
  version: '1.10.0',
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
    npm: 'https://www.npmjs.com/package/@abuiles/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 13,
    },
  },
})
