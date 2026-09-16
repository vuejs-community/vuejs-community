import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-redux-hmr',
  description: 'A Vite plugin which enables HMR for Redux when possible',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'redux',
    'hmr',
    'reload',
  ],
  source: {
    github: 'wdev-io/vite-plugin-redux-hmr',
    npm: 'vite-plugin-redux-hmr',
  },
  links: {
    github: 'https://github.com/wdev-io/vite-plugin-redux-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-redux-hmr',
    website: 'https://github.com/wdev-io/vite-plugin-redux-hmr/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 597,
      weekly: 166,
    },
  },
})
