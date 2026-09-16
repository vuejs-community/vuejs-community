import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-simple-scss',
  description: 'Rollup multiple .scss, .sass and .css imports',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'css',
    'sass',
    'scss',
  ],
  source: {
    github: 'kstiehl/rollup-plugin-simple-scss',
    npm: 'rollup-plugin-simple-scss',
  },
  links: {
    github: 'https://github.com/kstiehl/rollup-plugin-simple-scss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-simple-scss',
    website: 'https://github.com/kstiehl/rollup-plugin-simple-scss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
