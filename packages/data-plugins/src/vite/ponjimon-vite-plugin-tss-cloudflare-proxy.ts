import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ponjimon/vite-plugin-tss-cloudflare-proxy',
  description: 'A Vite plugin to make Cloudflare Bindings work locally when using TanStack Start.',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'cloudflare',
    'wrangler',
    'tsup',
    'typescript',
    'proxy',
    'bindings',
    'tanstack',
    'start',
    'plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ponjimon/vite-plugin-tss-cloudflare-proxy',
    npm: 'https://www.npmjs.com/package/@ponjimon/vite-plugin-tss-cloudflare-proxy',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
