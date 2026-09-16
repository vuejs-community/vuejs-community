import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dev-proxy',
  description: '🛰 Dev proxy enhanced with transform response json data to ts, mock data, identity auth, etc. Currently only vite is supported',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'json-to-ts',
  ],
  source: {
    github: 'imyangyong/unplugin-dev-proxy',
    npm: 'unplugin-dev-proxy',
  },
  links: {
    github: 'https://github.com/imyangyong/unplugin-dev-proxy',
    npm: 'https://www.npmjs.com/package/unplugin-dev-proxy',
    website: 'https://github.com/imyangyong/unplugin-dev-proxy#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
