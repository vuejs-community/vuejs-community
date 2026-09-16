import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@torchauth/vite-plugin-wrangler-spa',
  description: 'Vite plugin for creating Cloudflare Pages SPA applications with API endpoints',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare',
    'spa',
    'hono',
    'react',
    'functions',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'TorchAuth/vite-plugin-wrangler-spa',
    npm: '@torchauth/vite-plugin-wrangler-spa',
  },
  links: {
    github: 'https://github.com/TorchAuth/vite-plugin-wrangler-spa',
    npm: 'https://www.npmjs.com/package/@torchauth/vite-plugin-wrangler-spa',
    website: 'https://github.com/TorchAuth/vite-plugin-wrangler-spa.git',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 4,
    },
  },
})
