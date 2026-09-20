import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dchicchon/vite-plugin-chrome-extension',
  description: 'A plugin for building Chrome extensions. Forked from https://github.com/StarkShang/vite-plugin-chrome-extension',
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
    github: 'https://github.com/StarkShang/vite-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@dchicchon/vite-plugin-chrome-extension',
    website: 'https://github.com/StarkShang/vite-plugin-chrome-extension#readme',
  },
  source: {
    github: 'StarkShang/vite-plugin-chrome-extension',
    npm: '@dchicchon/vite-plugin-chrome-extension',
  },
  stats: {
    stars: 492,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
