import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chrome-extension',
  description: 'A plugin for building Chrome extensions!',
  icon: 'logos:vite-icon',
  version: '0.0.7',
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
    npm: 'vite-plugin-chrome-extension',
  },
  links: {
    github: 'https://github.com/StarkShang/vite-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-chrome-extension',
  },
  stats: {
    downloads: {
      monthly: 1104,
      weekly: 164,
    },
  },
})
