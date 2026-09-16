import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ejs-v5',
  description: 'ejs loader plugin for rollup.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'ejs',
    'template',
  ],
  source: {
    github: 'trofima/rollup-plugin-ejs',
    npm: 'rollup-plugin-ejs-v5',
  },
  links: {
    github: 'https://github.com/trofima/rollup-plugin-ejs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ejs-v5',
    website: 'https://github.com/trofima/rollup-plugin-ejs',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
