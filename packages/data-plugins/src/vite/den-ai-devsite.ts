import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@den-ai/devsite',
  description: 'Port-less dev URLs: one stable https://<name>.internal per project, with self-registered Caddy routes and phone access over Tailscale.',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dendotai/devsite',
    npm: 'https://www.npmjs.com/package/@den-ai/devsite',
  },
  stats: {
    downloads: {
      monthly: 292,
      weekly: 292,
    },
  },
})
