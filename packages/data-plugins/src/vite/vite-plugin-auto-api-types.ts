import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-api-types',
  description: 'A Vite plugin to automatically generate API types',
  icon: 'logos:vite-icon',
  version: '1.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'api',
    'types',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'legend402/vite-plugin-auto-api-types',
    npm: 'vite-plugin-auto-api-types',
  },
  links: {
    github: 'https://github.com/legend402/vite-plugin-auto-api-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-api-types',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 5,
    },
  },
})
