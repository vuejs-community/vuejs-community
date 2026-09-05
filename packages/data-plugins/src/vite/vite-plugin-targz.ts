import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-targz',
  description: 'A Vite plugin to create tar.gz archives of your build output',
  version: '1.0.12',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tar',
    'gzip',
    'archive',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lonecry/vite-plugin-tar',
    npm: 'https://www.npmjs.com/package/vite-plugin-targz',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
