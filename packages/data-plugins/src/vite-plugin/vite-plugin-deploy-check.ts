import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-check',
  description: 'Vite plugin to refresh page after deployment',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'onthia/vite-plugin-version-check',
    npm: 'vite-plugin-deploy-check',
  },
  links: {
    github: 'https://github.com/onthia/vite-plugin-version-check',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-check',
    website: 'https://github.com/onthia/vite-plugin-version-check#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
