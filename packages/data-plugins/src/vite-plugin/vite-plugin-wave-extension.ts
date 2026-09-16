import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wave-extension',
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
  source: {
    github: 'StarkShang/vite-plugin-chrome-extension',
    npm: 'vite-plugin-wave-extension',
  },
  links: {
    github: 'https://github.com/StarkShang/vite-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-wave-extension',
    website: 'https://github.com/StarkShang/vite-plugin-chrome-extension#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
