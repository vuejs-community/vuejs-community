import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-robots',
  description: 'Vite plugin for generating robots.txt for production and development builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'robots',
    'robots.txt',
    'vue',
    'react',
    'angular',
  ],
  source: {
    github: 'kolirt/vite-plugin-robots',
    npm: 'vite-plugin-robots',
  },
  links: {
    github: 'https://github.com/kolirt/vite-plugin-robots',
    npm: 'https://www.npmjs.com/package/vite-plugin-robots',
    website: 'https://github.com/kolirt/vite-plugin-robots#readme',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 7506,
      weekly: 1477,
    },
  },
})
