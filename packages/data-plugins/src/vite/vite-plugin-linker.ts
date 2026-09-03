import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linker',
  description: 'Build and update a WIP module into the current running project',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'npm-link',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/SubZtep/vite-plugin-linker',
    npm: 'https://www.npmjs.com/package/vite-plugin-linker',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
