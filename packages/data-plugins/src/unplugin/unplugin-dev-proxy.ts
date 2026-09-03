import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dev-proxy',
  description: '🛰 Dev proxy enhanced with transform response json data to ts, mock data, identity auth, etc. Currently only vite is supported',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'json-to-ts',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/imyangyong/unplugin-dev-proxy',
    npm: 'https://www.npmjs.com/package/unplugin-dev-proxy',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
