import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'better-router',
  description: 'A Vite plugin for file-based routing with Hono, React SSR, islands, and Cloudflare Workers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hono',
    'react',
    'ssr',
    'islands',
    'file-based-routing',
    'cloudflare',
    'cloudflare-workers',
  ],
  links: {
    github: 'https://github.com/bansal/better-router',
    npm: 'https://www.npmjs.com/package/better-router',
    website: 'https://better-router.bansal.io',
  },
  source: {
    github: 'bansal/better-router',
    npm: 'better-router',
  },
})
