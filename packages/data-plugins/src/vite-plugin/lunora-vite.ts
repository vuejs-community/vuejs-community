import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lunora/vite',
  description: 'The Lunora Vite plugin: codegen, type sync, wrangler validation, and an error overlay over @cloudflare/vite-plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lunora',
    'cloudflare',
    'workers',
    'durable-objects',
    'vite',
    'vite-plugin',
    'codegen',
    'wrangler',
  ],
  source: {
    github: 'anolilab/lunora',
    npm: '@lunora/vite',
  },
  links: {
    github: 'https://github.com/anolilab/lunora',
    npm: 'https://www.npmjs.com/package/@lunora/vite',
    website: 'https://lunora.sh',
  },
  stats: {
    stars: 270,
    downloads: {
      monthly: 9462,
      weekly: 2196,
    },
  },
})
