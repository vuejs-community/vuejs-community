import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/internal-helpers',
  description: 'Internal helpers used by Vite Deploy packages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/internal-helpers',
    website: 'https://vite-deploy.web-runes.dev',
  },
  source: {
    github: 'web-runes/vite-deploy',
    npm: '@vite-deploy/internal-helpers',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 362,
      weekly: 35,
    },
  },
})
