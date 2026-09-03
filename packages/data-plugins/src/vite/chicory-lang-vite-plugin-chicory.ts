import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chicory-lang/vite-plugin-chicory',
  description: 'Plugin to allow imports of Chicory (".chic") files in your Vite project',
  version: '0.0.11',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chicory',
    'chicory-lang',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chicory-lang/vite-plugin-chicory',
    npm: 'https://www.npmjs.com/package/@chicory-lang/vite-plugin-chicory',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 21,
    },
  },
})
