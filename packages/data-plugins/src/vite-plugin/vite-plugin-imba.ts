import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imba',
  description: 'The official [Imba](https://imba.io) plugin for [Vite](https://vitejs.dev).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'imba',
  ],
  links: {
    github: 'https://github.com/imba/imba',
    npm: 'https://www.npmjs.com/package/vite-plugin-imba',
    website: 'https://imba.io',
  },
  source: {
    github: 'imba/imba',
    npm: 'vite-plugin-imba',
  },
  stats: {
    stars: 6508,
    downloads: {
      monthly: 428,
      weekly: 116,
    },
  },
})
