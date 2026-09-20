import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thatsgolden/vite-plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/littlegolden/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/@thatsgolden/vite-plugin-html',
    website: 'https://github.com/littlegolden/vite-plugin-html/tree/master/#readme',
  },
  source: {
    github: 'littlegolden/vite-plugin-html',
    npm: '@thatsgolden/vite-plugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
