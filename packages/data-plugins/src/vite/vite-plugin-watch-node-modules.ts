import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-node-modules',
  description: 'A plugin to watch for changes in matched packages inside any \'node_modules\' folder and trigger a reload in Vite.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'node_modules',
    'watch',
    'reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lostpebble/vite-plugin-watch-node-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-node-modules',
  },
  stats: {
    downloads: {
      monthly: 1003,
      weekly: 306,
    },
  },
})
