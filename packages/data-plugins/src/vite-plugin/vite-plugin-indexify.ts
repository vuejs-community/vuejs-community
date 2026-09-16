import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-indexify',
  description: 'Generate jsons that index all or some files output by vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'klm127/vite-plugin-indexify',
    npm: 'vite-plugin-indexify',
  },
  links: {
    github: 'https://github.com/klm127/vite-plugin-indexify',
    npm: 'https://www.npmjs.com/package/vite-plugin-indexify',
    website: 'https://github.com/klm127/vite-plugin-indexify',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
