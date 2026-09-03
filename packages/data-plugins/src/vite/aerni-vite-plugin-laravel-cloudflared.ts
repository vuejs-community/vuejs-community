import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aerni/vite-plugin-laravel-cloudflared',
  description: 'Companion plugin to seamlessly integrate Cloudflared for Laravel with your Vite development server',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'cloudflared',
    'tunnel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aerni/vite-plugin-laravel-cloudflared',
    npm: 'https://www.npmjs.com/package/@aerni/vite-plugin-laravel-cloudflared',
  },
  stats: {
    downloads: {
      monthly: 859,
      weekly: 254,
    },
  },
})
