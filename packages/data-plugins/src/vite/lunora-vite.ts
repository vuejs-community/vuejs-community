import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lunora/vite',
  description: 'The Lunora Vite plugin: codegen, type sync, wrangler validation, and an error overlay over @cloudflare/vite-plugin',
  version: '0.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/anolilab/lunora',
    npm: 'https://www.npmjs.com/package/@lunora/vite',
  },
  stats: {
    downloads: {
      monthly: 11258,
      weekly: 3642,
    },
  },
})
