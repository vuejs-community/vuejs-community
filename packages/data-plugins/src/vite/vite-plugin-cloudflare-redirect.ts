import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cloudflare-redirect',
  description: 'Vite plugin to handle Cloudflare\'s _redirects file',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'redirect',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bluwy/vite-plugin-cloudflare-redirect',
    npm: 'https://www.npmjs.com/package/vite-plugin-cloudflare-redirect',
  },
  stats: {
    downloads: {
      monthly: 324,
      weekly: 40,
    },
  },
})
