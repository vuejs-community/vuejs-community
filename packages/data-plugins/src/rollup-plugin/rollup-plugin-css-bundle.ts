import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-css-bundle',
  description: 'A Rollup plugin to extract CSS into a single external file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'css',
  ],
  source: {
    github: 'Evercoder/rollup-plugin-css-bundle',
    npm: 'rollup-plugin-css-bundle',
  },
  links: {
    github: 'https://github.com/Evercoder/rollup-plugin-css-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-css-bundle',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 2192,
      weekly: 267,
    },
  },
})
