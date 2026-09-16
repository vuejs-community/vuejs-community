import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dlight-server',
  description: 'DLight transpiler as vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dlight.js',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-dlight-server',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dlight-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
