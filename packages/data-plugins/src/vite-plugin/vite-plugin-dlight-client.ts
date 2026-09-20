import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dlight-client',
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dlight-client',
  },
  source: {
    npm: 'vite-plugin-dlight-client',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
