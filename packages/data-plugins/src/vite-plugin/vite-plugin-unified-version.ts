import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unified-version',
  description: 'A Vite plugin to inject Git commit ID and build time into HTML meta tags and window object',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'build-time',
    'meta',
  ],
  source: {
    github: 'jywud/vite-plugin-unified-version',
    npm: 'vite-plugin-unified-version',
  },
  links: {
    github: 'https://github.com/jywud/vite-plugin-unified-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-unified-version',
    website: 'https://github.com/jywud/vite-plugin-unified-version#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
