import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-increment',
  description: 'Vite plugin that auto-increments version in package.json after each build',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'version',
    'plugin',
    'vite-plugin',
    'build',
    'versioning',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/i486/vite-plugin-version-increment',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-increment',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
