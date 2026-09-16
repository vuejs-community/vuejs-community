import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-api-types',
  description: 'A Vite plugin to automatically generate API types',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'api',
    'types',
  ],
  source: {
    github: 'legend402/vite-plugin-auto-api-types',
    npm: 'vite-plugin-auto-api-types',
  },
  links: {
    github: 'https://github.com/legend402/vite-plugin-auto-api-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-api-types',
    website: 'https://github.com/legend402/vite-plugin-auto-api-types#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 2,
    },
  },
})
