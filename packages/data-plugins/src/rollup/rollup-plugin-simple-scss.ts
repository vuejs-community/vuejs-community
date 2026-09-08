import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-simple-scss',
  description: 'Rollup multiple .scss, .sass and .css imports',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'css',
    'sass',
    'scss',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'kstiehl/rollup-plugin-simple-scss',
    npm: 'rollup-plugin-simple-scss',
  },
  links: {
    github: 'https://github.com/kstiehl/rollup-plugin-simple-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-simple-scss',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
