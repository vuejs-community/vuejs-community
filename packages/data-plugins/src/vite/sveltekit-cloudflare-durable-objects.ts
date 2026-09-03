import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-cloudflare-durable-objects',
  description: 'Bridge the gap between SvelteKit and Cloudflare Durable Objects - automatic export of Durable Objects to your worker bundle',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'sveltekit',
    'cloudflare',
    'durable-objects',
    'vite-plugin',
    'workers',
    'cloudflare-workers',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jillesme/sveltekit-cloudflare-durable-objects',
    npm: 'https://www.npmjs.com/package/sveltekit-cloudflare-durable-objects',
  },
  stats: {
    downloads: {
      monthly: 1102,
      weekly: 419,
    },
  },
})
