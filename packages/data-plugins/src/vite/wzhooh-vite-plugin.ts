import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wzhooh/vite-plugin',
  description: 'Vite plugin for Wzhooh applications running in sandboxed iframes',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'live-preview',
    'wzhooh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MIZUDINOV/wzhooh-back',
    npm: 'https://www.npmjs.com/package/@wzhooh/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 790,
      weekly: 790,
    },
  },
})
