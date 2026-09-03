import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unified-version',
  description: 'A Vite plugin to inject Git commit ID and build time into HTML meta tags and window object',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'build-time',
    'meta',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jywud/vite-plugin-unified-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-unified-version',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
