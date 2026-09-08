import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imba',
  description: 'The official [Imba](https://imba.io) plugin for [Vite](https://vitejs.dev).',
  icon: 'logos:vite-icon',
  version: '0.10.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'imba',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'imba/imba',
    npm: 'vite-plugin-imba',
  },
  links: {
    github: 'https://github.com/imba/imba',
    npm: 'https://www.npmjs.com/package/vite-plugin-imba',
  },
  stats: {
    downloads: {
      monthly: 507,
      weekly: 84,
    },
  },
})
