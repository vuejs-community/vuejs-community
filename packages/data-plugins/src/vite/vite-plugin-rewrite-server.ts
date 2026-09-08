import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rewrite-server',
  description: 'rewrite request plugn for Vite.\r work server and preview mode.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'okayasu/vite-plugin-rewrite-server',
    npm: 'vite-plugin-rewrite-server',
  },
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
