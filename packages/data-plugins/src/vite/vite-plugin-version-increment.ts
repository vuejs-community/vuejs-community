import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-increment',
  description: 'Vite plugin that auto-increments version in package.json after each build',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'i486/vite-plugin-version-increment',
    npm: 'vite-plugin-version-increment',
  },
  links: {
    github: 'https://github.com/i486/vite-plugin-version-increment',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-increment',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
