import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compile-sass-to-public',
  description: 'Plugin to make sass files compile from the source directory into public files',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-compile-sass-to-public',
  },
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
