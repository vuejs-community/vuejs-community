import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rsc-kit/core',
  description: 'React Server Components as a Vite plugin. Routing, streaming, server actions, typed urls and build-time prerendering — deploy to Bun, Node, Workers, Vercel or Deno.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'react-server-components',
    'rsc',
    'vite',
    'vite-plugin',
    'ssr',
    'streaming',
    'router',
    'bun',
    'hono',
    'elysia',
    'cloudflare-workers',
  ],
  source: {
    github: 'rsc-kit/rsc-kit',
    npm: '@rsc-kit/core',
  },
  links: {
    github: 'https://github.com/rsc-kit/rsc-kit',
    npm: 'https://www.npmjs.com/package/@rsc-kit/core',
    website: 'https://rsc-kit.dev',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 988,
      weekly: 988,
    },
  },
})
