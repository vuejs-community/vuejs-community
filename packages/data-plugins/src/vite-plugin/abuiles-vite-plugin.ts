import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@abuiles/vite-plugin',
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
  source: {
    github: 'cloudflare/workers-sdk',
    npm: '@abuiles/vite-plugin',
  },
  links: {
    github: 'https://github.com/cloudflare/workers-sdk',
    npm: 'https://www.npmjs.com/package/@abuiles/vite-plugin',
    website: 'https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin-cloudflare#readme',
  },
  stats: {
    stars: 4536,
    downloads: {
      monthly: 55,
      weekly: 15,
    },
  },
})
