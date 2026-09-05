import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-child-process',
  description: 'Vite plugin to run command when file change. Useful when script use local binary or have stateful behavior like websocket.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zx',
    'child-process',
    'hotreload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-child-process',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
