import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ts-sw-hmr',
  description: 'HMR for multiple TypeScript Service Workers',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'service workers',
    'typescript',
    'hot module replacement',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'x8BitRain/vite-plugin-ts-sw-hmr',
    npm: 'vite-plugin-ts-sw-hmr',
  },
  links: {
    github: 'https://github.com/x8BitRain/vite-plugin-ts-sw-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-ts-sw-hmr',
  },
  stats: {
    downloads: {
      monthly: 137,
      weekly: 23,
    },
  },
})
