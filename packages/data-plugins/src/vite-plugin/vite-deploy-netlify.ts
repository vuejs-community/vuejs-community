import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/netlify',
  description: 'Deploy your Vite project to Netlify.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'netlify',
  ],
  source: {
    github: 'web-runes/vite-deploy',
    npm: '@vite-deploy/netlify',
  },
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/netlify',
    website: 'https://vite-deploy.web-runes.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 233,
      weekly: 12,
    },
  },
})
