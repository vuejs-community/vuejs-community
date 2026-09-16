import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/vercel',
  description: 'Deploy your Vite project to Vercel.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'vercel',
  ],
  source: {
    github: 'web-runes/vite-deploy',
    npm: '@vite-deploy/vercel',
  },
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/vercel',
    website: 'https://vite-deploy.web-runes.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 229,
      weekly: 13,
    },
  },
})
