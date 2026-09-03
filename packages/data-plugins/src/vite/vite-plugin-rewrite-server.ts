import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rewrite-server',
  description: 'rewrite request plugn for Vite.\r work server and preview mode.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'serve',
    'rewrite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/okayasu/vite-plugin-rewrite-server',
    npm: 'https://www.npmjs.com/package/vite-plugin-rewrite-server',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
