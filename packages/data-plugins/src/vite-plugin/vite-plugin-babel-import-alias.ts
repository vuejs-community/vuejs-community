import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-babel-import-alias',
  description: 'A fix for vite import plugin for babel.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'babel-plugin',
    'vite-plugin',
    'vite',
  ],
  source: {
    github: '0ahz/vite-plugin-babel-import',
    npm: 'vite-plugin-babel-import-alias',
  },
  links: {
    github: 'https://github.com/0ahz/vite-plugin-babel-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-babel-import-alias',
    website: 'https://github.com/0ahz/vite-plugin-babel-import#readme',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 19,
      weekly: 13,
    },
  },
})
