import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-contents',
  description: 'A Rollup plugin to import content as strings like CSS, LESS and Fonts',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'less',
    'font',
    'import',
    'modules',
  ],
  source: {
    github: 'ernstc/rollup-plugin-import-contents',
    npm: 'rollup-plugin-import-contents',
  },
  links: {
    github: 'https://github.com/ernstc/rollup-plugin-import-contents',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-contents',
    website: 'https://github.com/ernstc/rollup-plugin-import-contents#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
