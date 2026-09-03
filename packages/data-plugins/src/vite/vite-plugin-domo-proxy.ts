import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-domo-proxy',
  description: 'Native vite plugin to proxy requests through the vite-dev-server to domo',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'domo',
    'vite',
    'vite-plugin',
    'ryuu',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-domo-proxy',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 0,
    },
  },
})
