import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rewrite-server',
  description: 'rewrite request plugn for Vite.\r work server and preview mode.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'serve',
    'rewrite',
  ],
  source: {
    github: 'okayasu/vite-plugin-rewrite-server',
    npm: 'vite-plugin-rewrite-server',
  },
  links: {
    github: 'https://github.com/okayasu/vite-plugin-rewrite-server',
    npm: 'https://www.npmjs.com/package/vite-plugin-rewrite-server',
    website: 'https://github.com/okayasu/vite-plugin-rewrite-server#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
