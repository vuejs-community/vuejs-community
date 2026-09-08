import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-page',
  description: 'Vite plugin to support multiple pages with single HTML',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'html',
    'mpa',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cforcloud/vite-plugin-html-page',
    npm: 'vite-plugin-html-page',
  },
  links: {
    github: 'https://github.com/cforcloud/vite-plugin-html-page',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-page',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
