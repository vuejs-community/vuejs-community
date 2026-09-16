import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-no-refresh-html',
  description: 'Vite plugin that hot-updates JS files without refreshing the HTML page, preserving user inputs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite dev mode hmr hotupdate javascript module',
    'no refresh html preserve input',
  ],
  source: {
    github: 'windwiny/vite-plugin-no-refresh-html',
    npm: 'vite-plugin-no-refresh-html',
  },
  links: {
    github: 'https://github.com/windwiny/vite-plugin-no-refresh-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-no-refresh-html',
    website: 'https://github.com/windwiny/vite-plugin-no-refresh-html#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
