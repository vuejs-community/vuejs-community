import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-no-refresh-html',
  description: 'Vite plugin that hot-updates JS files without refreshing the HTML page, preserving user inputs',
  icon: 'logos:vite-icon',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite dev mode hmr hotupdate javascript module',
    'no refresh html preserve input',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'windwiny/vite-plugin-no-refresh-html',
    npm: 'vite-plugin-no-refresh-html',
  },
  links: {
    github: 'https://github.com/windwiny/vite-plugin-no-refresh-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-no-refresh-html',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
