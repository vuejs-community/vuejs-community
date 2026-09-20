import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-extract-vendors',
  description: 'A vite plugin to extract external libraries from node_modules to vendors directory to improve caching of 3rd party js files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vendors',
    'code-splitting',
  ],
  links: {
    github: 'https://github.com/daniakash/vite-plugin-extract-vendors',
    npm: 'https://www.npmjs.com/package/vite-plugin-extract-vendors',
    website: 'https://github.com/daniakash/vite-plugin-extract-vendors#readme',
  },
  source: {
    github: 'daniakash/vite-plugin-extract-vendors',
    npm: 'vite-plugin-extract-vendors',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
