import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wzhooh/vite-plugin',
  description: 'Vite plugin for Wzhooh applications running in sandboxed iframes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'live-preview',
    'wzhooh',
  ],
  links: {
    github: 'https://github.com/MIZUDINOV/wzhooh-back',
    npm: 'https://www.npmjs.com/package/@wzhooh/vite-plugin',
    website: 'https://github.com/MIZUDINOV/wzhooh-back#readme',
  },
  source: {
    github: 'MIZUDINOV/wzhooh-back',
    npm: '@wzhooh/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 842,
      weekly: 6,
    },
  },
})
