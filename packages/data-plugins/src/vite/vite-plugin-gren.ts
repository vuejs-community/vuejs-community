import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gren',
  description: 'A vite plugin for the Gren programming language',
  icon: 'logos:vite-icon',
  version: '0.6.1',
  category: 'plugin',
  tags: [
    'gren',
    'gren-lang',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'gren-lang/vite-plugin-gren',
    npm: 'vite-plugin-gren',
  },
  links: {
    github: 'https://github.com/gren-lang/vite-plugin-gren',
    npm: 'https://www.npmjs.com/package/vite-plugin-gren',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 19,
    },
  },
})
