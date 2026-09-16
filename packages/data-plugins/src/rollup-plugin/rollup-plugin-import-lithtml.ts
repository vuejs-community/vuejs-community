import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-lithtml',
  description: 'A Rollup plugin to import lit-html from an external .html file, allowing the html to be separated from the JavaScript.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'import',
    'lit-html',
  ],
  source: {
    github: 'mdownes/rollup-plugin-import-lithtml',
    npm: 'rollup-plugin-import-lithtml',
  },
  links: {
    github: 'https://github.com/mdownes/rollup-plugin-import-lithtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-lithtml',
    website: 'https://github.com/mdownes/rollup-plugin-import-lithtml#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
