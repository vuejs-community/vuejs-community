import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wave-extension',
  description: 'A plugin for building Chrome extensions!',
  icon: 'logos:vite-icon',
  version: '0.0.11',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'chrome extension',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'StarkShang/vite-plugin-chrome-extension',
    npm: 'vite-plugin-wave-extension',
  },
  links: {
    github: 'https://github.com/StarkShang/vite-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-wave-extension',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
