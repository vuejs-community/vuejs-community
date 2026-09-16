import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oselvar/sveltekit-add-worker-exports',
  description: 'Vite plugin that adds Durable Object and Workflow exports to SvelteKit Cloudflare workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sveltekit',
    'cloudflare',
    'workers',
    'durable-objects',
    'workflows',
    'vite-plugin',
  ],
  source: {
    github: 'oselvar/sveltekit-add-worker-exports',
    npm: '@oselvar/sveltekit-add-worker-exports',
  },
  links: {
    github: 'https://github.com/oselvar/sveltekit-add-worker-exports',
    npm: 'https://www.npmjs.com/package/@oselvar/sveltekit-add-worker-exports',
    website: 'https://github.com/oselvar/sveltekit-add-worker-exports#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 4503,
      weekly: 1384,
    },
  },
})
