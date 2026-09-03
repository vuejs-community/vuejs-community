import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bv-vite-crx',
  description: 'A plugin for building Chrome extensions!',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'chrome extension',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/bv-vite-crx',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
