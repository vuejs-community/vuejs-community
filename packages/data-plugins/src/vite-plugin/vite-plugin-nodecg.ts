import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nodecg',
  description: 'Vite plugin to enable its use with NodeCG',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nodecg/vite-plugin-nodecg',
    npm: 'https://www.npmjs.com/package/vite-plugin-nodecg',
    website: 'https://github.com/nodecg/vite-plugin-nodecg#readme',
  },
  source: {
    github: 'nodecg/vite-plugin-nodecg',
    npm: 'vite-plugin-nodecg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 11,
    },
  },
})
