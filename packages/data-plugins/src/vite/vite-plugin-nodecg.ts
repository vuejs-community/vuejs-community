import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nodecg',
  description: 'Vite plugin to enable its use with NodeCG',
  icon: 'logos:vite-icon',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'nodecg/vite-plugin-nodecg',
    npm: 'vite-plugin-nodecg',
  },
  links: {
    github: 'https://github.com/nodecg/vite-plugin-nodecg',
    npm: 'https://www.npmjs.com/package/vite-plugin-nodecg',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 16,
    },
  },
})
