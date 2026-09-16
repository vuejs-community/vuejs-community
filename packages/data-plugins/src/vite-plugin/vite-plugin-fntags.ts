import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fntags',
  description: 'Vite plugin for fntags HMR — preserves state across hot module reloads',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fntags',
    'hmr',
    'hot-module-reloading',
  ],
  source: {
    github: 'srfnstack/fntags',
    npm: 'vite-plugin-fntags',
  },
  links: {
    github: 'https://github.com/srfnstack/fntags',
    npm: 'https://www.npmjs.com/package/vite-plugin-fntags',
    website: 'https://github.com/srfnstack/fntags/tree/master/packages/vite-plugin-fntags',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
