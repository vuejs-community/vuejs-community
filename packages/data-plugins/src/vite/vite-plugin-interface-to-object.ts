import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-interface-to-object',
  description: 'Vite plugin for generating interface guards during Vite builds',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-interface-to-object',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
