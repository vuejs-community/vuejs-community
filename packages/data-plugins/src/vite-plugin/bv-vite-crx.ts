import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bv-vite-crx',
  description: 'A plugin for building Chrome extensions!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'chrome extension',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/bv-vite-crx',
  },
  source: {
    npm: 'bv-vite-crx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
