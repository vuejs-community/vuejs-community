import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-comparison',
  description: 'Plugin is used for synchronization environment variables from sample file to another one',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'environment variables',
    'comparison',
    'synchronization',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dmitriy-borisov/vite-plugin-env-comparison',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-comparison',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
