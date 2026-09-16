import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@den-ai/devsite',
  description: 'Port-less dev URLs: one stable https://<name>.internal per project, with self-registered Caddy routes and phone access over Tailscale.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'vite',
    'vite-plugin',
    'caddy',
    'https',
    'dev-server',
    'local-development',
    'tailscale',
  ],
  source: {
    github: 'dendotai/devsite',
    npm: '@den-ai/devsite',
  },
  links: {
    github: 'https://github.com/dendotai/devsite',
    npm: 'https://www.npmjs.com/package/@den-ai/devsite',
    website: 'https://github.com/dendotai/devsite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 516,
      weekly: 17,
    },
  },
})
