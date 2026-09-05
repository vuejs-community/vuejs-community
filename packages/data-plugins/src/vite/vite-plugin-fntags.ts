import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fntags',
  description: 'Vite plugin for fntags HMR — preserves state across hot module reloads',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'fntags',
    'hmr',
    'hot-module-reloading',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/srfnstack/fntags',
    npm: 'https://www.npmjs.com/package/vite-plugin-fntags',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
