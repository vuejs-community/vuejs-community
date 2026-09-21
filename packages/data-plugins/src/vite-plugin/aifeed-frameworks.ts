import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aifeed/frameworks',
  description: 'Drop-in build plugins that sign static output for AIFeed: Vite, Astro, Next.js, and a generic CLI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aifeed',
    'vite',
    'vite-plugin',
    'astro',
    'astro-integration',
    'nextjs',
    'static-site',
    'markdown',
    'ed25519',
    'ai',
    'content-permissions',
  ],
  links: {
    github: 'https://github.com/denyn1/aifeed-protocol',
    npm: 'https://www.npmjs.com/package/@aifeed/frameworks',
    website: 'https://aifeed.md',
  },
  source: {
    github: 'denyn1/aifeed-protocol',
    npm: '@aifeed/frameworks',
  },
})
