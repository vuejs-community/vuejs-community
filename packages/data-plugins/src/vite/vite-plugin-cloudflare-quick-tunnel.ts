import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-quick-tunnel',
  description: 'Expose the Vite dev or preview server through a Cloudflare quick tunnel',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'tunnel',
    'trycloudflare',
    'quick-tunnel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alyyousuf7/vite-plugin-cloudflare-quick-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-quick-tunnel',
  },
  stats: {
    downloads: {
      monthly: 201,
      weekly: 8,
    },
  },
})
