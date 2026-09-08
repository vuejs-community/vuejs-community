import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-redux-hmr',
  description: 'A Vite plugin which enables HMR for Redux when possible',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'redux',
    'hmr',
    'reload',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'wdev-io/vite-plugin-redux-hmr',
    npm: 'vite-plugin-redux-hmr',
  },
  links: {
    github: 'https://github.com/wdev-io/vite-plugin-redux-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-redux-hmr',
  },
  stats: {
    downloads: {
      monthly: 438,
      weekly: 208,
    },
  },
})
