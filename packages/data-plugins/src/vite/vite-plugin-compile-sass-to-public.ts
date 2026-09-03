import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compile-sass-to-public',
  description: 'Plugin to make sass files compile from the source directory into public files',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-compile-sass-to-public',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
