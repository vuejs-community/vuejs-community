import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-node-modules',
  description: 'A plugin to watch for changes in matched packages inside any \'node_modules\' folder and trigger a reload in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'node_modules',
    'watch',
    'reload',
  ],
  source: {
    github: 'lostpebble/vite-plugin-watch-node-modules',
    npm: 'vite-plugin-watch-node-modules',
  },
  links: {
    github: 'https://github.com/lostpebble/vite-plugin-watch-node-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-node-modules',
    website: 'https://github.com/lostpebble/vite-plugin-watch-node-modules#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 881,
      weekly: 167,
    },
  },
})
