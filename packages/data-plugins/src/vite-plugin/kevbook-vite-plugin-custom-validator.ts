import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kevbook/vite-plugin-custom-validator',
  description: 'Vite plugin to add a custom validator function at build or dev time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'validation',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@kevbook/vite-plugin-custom-validator',
  },
  source: {
    npm: '@kevbook/vite-plugin-custom-validator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
