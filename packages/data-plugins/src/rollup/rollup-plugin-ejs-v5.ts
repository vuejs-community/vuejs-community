import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ejs-v5',
  description: 'ejs loader plugin for rollup.js',
  icon: 'logos:rollupjs',
  version: '5.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'ejs',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'trofima/rollup-plugin-ejs',
    npm: 'rollup-plugin-ejs-v5',
  },
  links: {
    github: 'https://github.com/trofima/rollup-plugin-ejs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ejs-v5',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
