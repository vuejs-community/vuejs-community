import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-quick-tunnel',
  description: 'Expose the Vite dev or preview server through a Cloudflare quick tunnel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'tunnel',
    'trycloudflare',
    'quick-tunnel',
  ],
  links: {
    github: 'https://github.com/alyyousuf7/vite-plugin-cloudflare-quick-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-quick-tunnel',
    website: 'https://github.com/alyyousuf7/vite-plugin-cloudflare-quick-tunnel#readme',
  },
  source: {
    github: 'alyyousuf7/vite-plugin-cloudflare-quick-tunnel',
    npm: 'vite-plugin-cloudflare-quick-tunnel',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 47,
      weekly: 9,
    },
  },
})
