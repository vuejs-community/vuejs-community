import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kevbook/vite-plugin-custom-validator',
  description: 'Vite plugin to add a custom validator function at build or dev time',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'validation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@kevbook/vite-plugin-custom-validator',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
