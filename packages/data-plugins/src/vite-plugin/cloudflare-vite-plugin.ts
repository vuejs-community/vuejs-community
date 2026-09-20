import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cloudflare/vite-plugin',
  description: 'Cloudflare plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare',
    'cloudflare-workers',
    'vite',
    'vite-plugin',
    'workers',
  ],
  links: {
    github: 'https://github.com/cloudflare/workers-sdk',
    npm: 'https://www.npmjs.com/package/@cloudflare/vite-plugin',
    website: 'https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin-cloudflare#readme',
  },
  source: {
    github: 'cloudflare/workers-sdk',
    npm: '@cloudflare/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17113387,
      weekly: 3570540,
    },
  },
})
