import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fntags',
  description: 'Vite plugin for fntags HMR — preserves state across hot module reloads',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'srfnstack/fntags',
    npm: 'vite-plugin-fntags',
  },
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
