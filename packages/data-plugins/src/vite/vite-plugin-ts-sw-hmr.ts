import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ts-sw-hmr',
  description: 'HMR for multiple TypeScript Service Workers',
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
  links: {
    github: 'https://github.com/x8BitRain/vite-plugin-ts-sw-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-ts-sw-hmr',
  },
  stats: {
    downloads: {
      monthly: 167,
      weekly: 26,
    },
  },
})
