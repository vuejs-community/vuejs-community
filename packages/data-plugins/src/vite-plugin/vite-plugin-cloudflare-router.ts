import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-router',
  description: 'A file-based router for Cloudflare Workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare',
    'cloudflare-workers',
    'file-based-router',
    'router',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yusuke99/vite-plugin-cloudflare-router',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-router',
  },
  source: {
    github: 'yusuke99/vite-plugin-cloudflare-router',
    npm: 'vite-plugin-cloudflare-router',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 803,
      weekly: 26,
    },
  },
})
