import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-type-auto-imports',
  description: 'type-auto-imports is a vite plugin that allows all defined types(interfaces, classes & types) to be globally available',
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
    npm: 'vite-plugin-type-auto-imports',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-type-auto-imports',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 77,
      weekly: 2,
    },
  },
})
