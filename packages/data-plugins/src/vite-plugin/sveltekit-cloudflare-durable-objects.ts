import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-cloudflare-durable-objects',
  description: 'Bridge the gap between SvelteKit and Cloudflare Durable Objects - automatic export of Durable Objects to your worker bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sveltekit',
    'cloudflare',
    'durable-objects',
    'vite-plugin',
    'workers',
    'cloudflare-workers',
  ],
  source: {
    github: 'jillesme/sveltekit-cloudflare-durable-objects',
    npm: 'sveltekit-cloudflare-durable-objects',
  },
  links: {
    github: 'https://github.com/jillesme/sveltekit-cloudflare-durable-objects',
    npm: 'https://www.npmjs.com/package/sveltekit-cloudflare-durable-objects',
    website: 'https://github.com/jillesme/sveltekit-cloudflare-durable-objects#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1218,
      weekly: 110,
    },
  },
})
