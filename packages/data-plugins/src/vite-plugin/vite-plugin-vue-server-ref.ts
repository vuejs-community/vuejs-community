import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-server-ref',
  description: 'Share state between clients and Vite server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-vue-server-ref',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-server-ref',
    website: 'https://github.com/antfu/vite-plugin-vue-server-ref#readme',
  },
  source: {
    github: 'antfu/vite-plugin-vue-server-ref',
    npm: 'vite-plugin-vue-server-ref',
  },
  stats: {
    stars: 75,
    downloads: {
      monthly: 284907,
      weekly: 71547,
    },
  },
})
