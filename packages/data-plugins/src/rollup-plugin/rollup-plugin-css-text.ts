import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-css-text',
  description: 'A rollup plugin to generate javascript files that export the text of the css files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'js',
    'text',
  ],
  links: {
    github: 'https://github.com/amjedomar/rollup-plugin-css-text',
    npm: 'https://www.npmjs.com/package/rollup-plugin-css-text',
  },
  source: {
    github: 'amjedomar/rollup-plugin-css-text',
    npm: 'rollup-plugin-css-text',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1102,
      weekly: 32,
    },
  },
})
