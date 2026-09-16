import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tinloof/tanstack-wsr',
  description: 'Worker-Side Rendering (WSR) for TanStack Start: render selected routes inside a service worker — instant, offline, zero-flash document loads.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'tanstack',
    'tanstack-start',
    'tanstack-router',
    'service-worker',
    'wsr',
    'ssr',
    'offline',
    'pwa',
  ],
  source: {
    github: 'tinloof/tanstack-wsr',
    npm: '@tinloof/tanstack-wsr',
  },
  links: {
    github: 'https://github.com/tinloof/tanstack-wsr',
    npm: 'https://www.npmjs.com/package/@tinloof/tanstack-wsr',
    website: 'https://github.com/tinloof/tanstack-wsr#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 389,
      weekly: 10,
    },
  },
})
