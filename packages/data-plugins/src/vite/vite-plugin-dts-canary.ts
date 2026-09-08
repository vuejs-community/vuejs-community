import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dts-canary',
  description: '<h1 align="center">vite-plugin-dts</h1>',
  icon: 'logos:vite-icon',
  version: '4.2.3-beta.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ts',
    'dts',
    'typescript',
    'vue',
    'tsc',
    'vue-tsc',
    'volar',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'webkong/vite-plugin-dts',
    npm: 'vite-plugin-dts-canary',
  },
  links: {
    github: 'https://github.com/webkong/vite-plugin-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-dts-canary',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
