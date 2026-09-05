import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-indexify',
  description: 'Generate jsons that index all or some files output by vite.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'indexify',
    'assets',
    'public',
    'dirents',
    'directory',
    'index',
    'listing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/klm127/vite-plugin-indexify',
    npm: 'https://www.npmjs.com/package/vite-plugin-indexify',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
