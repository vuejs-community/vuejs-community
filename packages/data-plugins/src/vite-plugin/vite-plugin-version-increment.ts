import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-increment',
  description: 'Vite plugin that auto-increments version in package.json after each build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'version',
    'plugin',
    'vite-plugin',
    'build',
    'versioning',
  ],
  links: {
    github: 'https://github.com/i486/vite-plugin-version-increment',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-increment',
    website: 'https://github.com/i486/vite-plugin-version-increment#readme',
  },
  source: {
    github: 'i486/vite-plugin-version-increment',
    npm: 'vite-plugin-version-increment',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
