import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unified-version',
  description: 'A Vite plugin to inject Git commit ID and build time into HTML meta tags and window object',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'jywud/vite-plugin-unified-version',
    npm: 'vite-plugin-unified-version',
  },
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
