import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-child-process',
  description: 'Vite plugin to run command when file change. Useful when script use local binary or have stateful behavior like websocket.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zx',
    'child-process',
    'hotreload',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-child-process',
  },
  source: {
    npm: 'vite-plugin-child-process',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
