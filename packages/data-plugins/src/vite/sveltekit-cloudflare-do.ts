import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-cloudflare-do',
  description: 'Bridge the gap between SvelteKit and Cloudflare Durable Objects - automatic export of Durable Objects to your worker bundle',
  version: '0.2.1',
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
    github: 'https://github.com/The-LukeZ/sveltekit-cloudflare-do',
    npm: 'https://www.npmjs.com/package/sveltekit-cloudflare-do',
  },
  stats: {
    downloads: {
      monthly: 1159,
      weekly: 399,
    },
  },
})
