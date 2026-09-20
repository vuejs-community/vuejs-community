import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-domo-proxy',
  description: 'Native vite plugin to proxy requests through the vite-dev-server to domo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'domo',
    'vite',
    'vite-plugin',
    'ryuu',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-domo-proxy',
  },
  source: {
    npm: 'vite-plugin-domo-proxy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
