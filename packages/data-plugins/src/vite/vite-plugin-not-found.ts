import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-not-found',
  description: 'Automatically put the version file in your project dist folder',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-not-found',
    'git',
    'project',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xkloveme/vite-plugin-not-found',
    npm: 'https://www.npmjs.com/package/vite-plugin-not-found',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
