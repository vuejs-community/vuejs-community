import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version',
  description: 'Automatically put the version file in your project dist folder',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yrming/vite-plugin-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-version',
  },
  stats: {
    downloads: {
      monthly: 960,
      weekly: 128,
    },
  },
})
