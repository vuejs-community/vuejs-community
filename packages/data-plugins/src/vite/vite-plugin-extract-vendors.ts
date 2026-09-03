import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-extract-vendors',
  description: 'A vite plugin to extract external libraries from node_modules to vendors directory to improve caching of 3rd party js files',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vendors',
    'code-splitting',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/daniakash/vite-plugin-extract-vendors',
    npm: 'https://www.npmjs.com/package/vite-plugin-extract-vendors',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 7,
    },
  },
})
