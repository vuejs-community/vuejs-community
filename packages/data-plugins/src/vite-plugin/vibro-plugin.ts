import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vibro/plugin',
  description: 'Vibro Vite plugin: dev-server middleware, transports, client injection, built-in tools and integrations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vibro',
    'vite',
    'vite-plugin',
    'devtools',
    'mcp',
    'hmr',
  ],
  source: {
    npm: '@vibro/plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@vibro/plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 62,
    },
  },
})
