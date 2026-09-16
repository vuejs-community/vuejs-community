import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@morlz/rollup-plugin-scss',
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
    github: 'ruintterra/rollup-plugin-scss',
    npm: '@morlz/rollup-plugin-scss',
  },
  links: {
    github: 'https://github.com/ruintterra/rollup-plugin-scss',
    npm: 'https://www.npmjs.com/package/@morlz/rollup-plugin-scss',
    website: 'https://github.com/ruintterra/rollup-plugin-scss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
