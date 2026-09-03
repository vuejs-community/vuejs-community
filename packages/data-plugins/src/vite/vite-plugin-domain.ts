import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-domain',
  description: 'Vite plugin that wires a local domain via Caddy for your dev server.',
  version: '2.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'domain',
    'caddy',
    'local',
    'https',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mustafa0x/vite-plugin-domain',
    npm: 'https://www.npmjs.com/package/vite-plugin-domain',
  },
  stats: {
    downloads: {
      monthly: 2391,
      weekly: 533,
    },
  },
})
