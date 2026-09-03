import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-format',
  description: 'Format code and assets using Prettier',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'prettier',
    'prettify',
    'pretty',
    'beautify',
    'format',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-format',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
