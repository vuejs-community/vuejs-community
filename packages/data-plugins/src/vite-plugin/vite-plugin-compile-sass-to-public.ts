import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compile-sass-to-public',
  description: 'Plugin to make sass files compile from the source directory into public files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-compile-sass-to-public',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-compile-sass-to-public',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
