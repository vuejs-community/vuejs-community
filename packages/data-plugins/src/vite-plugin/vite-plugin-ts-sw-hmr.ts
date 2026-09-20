import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ts-sw-hmr',
  description: 'HMR for multiple TypeScript Service Workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'service workers',
    'typescript',
    'hot module replacement',
  ],
  links: {
    github: 'https://github.com/x8BitRain/vite-plugin-ts-sw-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-ts-sw-hmr',
    website: 'https://github.com/x8BitRain/vite-plugin-ts-sw-hmr#readme',
  },
  source: {
    github: 'x8BitRain/vite-plugin-ts-sw-hmr',
    npm: 'vite-plugin-ts-sw-hmr',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 116,
      weekly: 14,
    },
  },
})
