import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-redirect',
  description: 'Vite plugin to handle Cloudflare\'s _redirects file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'redirect',
  ],
  links: {
    github: 'https://github.com/bluwy/vite-plugin-cloudflare-redirect',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-redirect',
    website: 'https://github.com/bluwy/vite-plugin-cloudflare-redirect',
  },
  source: {
    github: 'bluwy/vite-plugin-cloudflare-redirect',
    npm: 'vite-plugin-cloudflare-redirect',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 220,
      weekly: 62,
    },
  },
})
