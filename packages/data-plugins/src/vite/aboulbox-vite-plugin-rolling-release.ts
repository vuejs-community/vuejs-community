import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aboulbox/vite-plugin-rolling-release',
  description: 'A plugin to create a symlink to your custom build directory',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    'builder',
    'symlink',
    'vite-plugin-rolling-release',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aboul/vite-plugin-rolling-release',
    npm: 'https://www.npmjs.com/package/@aboulbox/vite-plugin-rolling-release',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
