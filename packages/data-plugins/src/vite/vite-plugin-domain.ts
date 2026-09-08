import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-domain',
  description: 'Vite plugin that wires a local domain via Caddy for your dev server.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'mustafa0x/vite-plugin-domain',
    npm: 'vite-plugin-domain',
  },
  links: {
    github: 'https://github.com/mustafa0x/vite-plugin-domain',
    npm: 'https://www.npmjs.com/package/vite-plugin-domain',
  },
  stats: {
    downloads: {
      monthly: 2391,
      weekly: 603,
    },
  },
})
