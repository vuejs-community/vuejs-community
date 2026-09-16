import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-comparison',
  description: 'Plugin is used for synchronization environment variables from sample file to another one',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'environment variables',
    'comparison',
    'synchronization',
  ],
  source: {
    github: 'dmitriy-borisov/vite-plugin-env-comparison',
    npm: 'vite-plugin-env-comparison',
  },
  links: {
    github: 'https://github.com/dmitriy-borisov/vite-plugin-env-comparison',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-comparison',
    website: 'https://github.com/dmitriy-borisov/vite-plugin-env-comparison',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
