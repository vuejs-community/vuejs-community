import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gushogg-blake/rollup-plugin-scss',
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
    github: 'thgh/rollup-plugin-scss',
    npm: '@gushogg-blake/rollup-plugin-scss',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-scss',
    npm: 'https://www.npmjs.com/package/@gushogg-blake/rollup-plugin-scss',
    website: 'https://github.com/thgh/rollup-plugin-scss',
  },
  stats: {
    stars: 139,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
