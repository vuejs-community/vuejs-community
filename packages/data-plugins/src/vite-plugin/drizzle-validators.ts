import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'drizzle-validators',
  description: 'Generate zero-overhead, virtual validation schemas (Zod, Valibot, TypeBox) directly from Drizzle ORM tables at dev and build time. Zero Drizzle code reaches your client bundle.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drizzle',
    'drizzle-orm',
    'drizzle-zod',
    'zod',
    'valibot',
    'typebox',
    'schema',
    'virtual-module',
    'validation',
    'e2e',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/drizzle-validators',
  },
  source: {
    npm: 'drizzle-validators',
  },
})
