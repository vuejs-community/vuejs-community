import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yrming/vite-plugin-version',
    npm: 'vite-plugin-version',
  },
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
