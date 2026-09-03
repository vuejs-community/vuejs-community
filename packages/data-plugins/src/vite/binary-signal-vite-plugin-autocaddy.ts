import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@binary-signal/vite-plugin-autocaddy',
  description: 'Vite plugin that automatically registers local dev servers with Caddy reverse proxy',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'caddy',
    'autocaddy',
    'reverse',
    'proxy',
    'reverse-proxy',
    'dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/binary-signal/vite-plugin-autocaddy',
    npm: 'https://www.npmjs.com/package/@binary-signal/vite-plugin-autocaddy',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 8,
    },
  },
})
