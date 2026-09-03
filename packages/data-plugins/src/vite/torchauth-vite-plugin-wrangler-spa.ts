import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@torchauth/vite-plugin-wrangler-spa',
  description: 'Vite plugin for creating Cloudflare Pages SPA applications with API endpoints',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'cloudflare',
    'spa',
    'hono',
    'react',
    'functions',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/TorchAuth/vite-plugin-wrangler-spa',
    npm: 'https://www.npmjs.com/package/@torchauth/vite-plugin-wrangler-spa',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 26,
    },
  },
})
