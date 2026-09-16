import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/node',
  description: 'Deploy your Vite project to hosts which support Node.js.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'node',
  ],
  source: {
    github: 'web-runes/vite-deploy',
    npm: '@vite-deploy/node',
  },
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/node',
    website: 'https://vite-deploy.web-runes.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 211,
      weekly: 9,
    },
  },
})
