import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/cloudflare',
  description: 'Deploy your Vite project to Cloudflare.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'cloudflare',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/cloudflare',
  },
  stats: {
    downloads: {
      monthly: 298,
      weekly: 40,
    },
  },
})
