import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/cloudflare',
  description: 'Deploy your Vite project to Cloudflare.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'cloudflare',
  ],
  source: {
    github: 'web-runes/vite-deploy',
    npm: '@vite-deploy/cloudflare',
  },
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/cloudflare',
    website: 'https://vite-deploy.web-runes.dev',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 321,
      weekly: 37,
    },
  },
})
