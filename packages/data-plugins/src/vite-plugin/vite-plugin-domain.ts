import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-domain',
  description: 'Vite plugin that wires a local domain via Caddy for your dev server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'domain',
    'caddy',
    'local',
    'https',
  ],
  links: {
    github: 'https://github.com/mustafa0x/vite-plugin-domain',
    npm: 'https://www.npmjs.com/package/vite-plugin-domain',
    website: 'https://github.com/mustafa0x/vite-plugin-domain#readme',
  },
  source: {
    github: 'mustafa0x/vite-plugin-domain',
    npm: 'vite-plugin-domain',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 2356,
      weekly: 344,
    },
  },
})
