import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@voltdev/vite-plugin',
  description: 'Compile Volt templates at build time so no compiler ships to the browser.',
  version: '0.1.0-alpha.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'volt',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/volt-js/volt',
    npm: 'https://www.npmjs.com/package/@voltdev/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 130,
      weekly: 11,
    },
  },
})
