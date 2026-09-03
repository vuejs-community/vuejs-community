import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/netlify',
  description: 'Deploy your Vite project to Netlify.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'netlify',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/netlify',
  },
  stats: {
    downloads: {
      monthly: 233,
      weekly: 29,
    },
  },
})
