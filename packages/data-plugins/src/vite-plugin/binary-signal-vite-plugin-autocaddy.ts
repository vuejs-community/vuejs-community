import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binary-signal/vite-plugin-autocaddy',
  description: 'Vite plugin that automatically registers local dev servers with Caddy reverse proxy',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/binary-signal/vite-plugin-autocaddy',
    npm: 'https://www.npmjs.com/package/@binary-signal/vite-plugin-autocaddy',
    website: 'https://github.com/binary-signal/vite-plugin-autocaddy#readme',
  },
  source: {
    github: 'binary-signal/vite-plugin-autocaddy',
    npm: '@binary-signal/vite-plugin-autocaddy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
