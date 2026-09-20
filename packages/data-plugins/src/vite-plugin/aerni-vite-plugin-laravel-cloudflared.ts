import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aerni/vite-plugin-laravel-cloudflared',
  description: 'Companion plugin to seamlessly integrate Cloudflared for Laravel with your Vite development server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'cloudflared',
    'tunnel',
  ],
  links: {
    github: 'https://github.com/aerni/vite-plugin-laravel-cloudflared',
    npm: 'https://www.npmjs.com/package/@aerni/vite-plugin-laravel-cloudflared',
    website: 'https://github.com/aerni/vite-plugin-laravel-cloudflared',
  },
  source: {
    github: 'aerni/vite-plugin-laravel-cloudflared',
    npm: '@aerni/vite-plugin-laravel-cloudflared',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 945,
      weekly: 150,
    },
  },
})
