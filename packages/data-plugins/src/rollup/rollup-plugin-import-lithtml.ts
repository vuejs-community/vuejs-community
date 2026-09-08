import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-lithtml',
  description: 'A Rollup plugin to import lit-html from an external .html file, allowing the html to be separated from the JavaScript.',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'import',
    'lit-html',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mdownes/rollup-plugin-import-lithtml',
    npm: 'rollup-plugin-import-lithtml',
  },
  links: {
    github: 'https://github.com/mdownes/rollup-plugin-import-lithtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-lithtml',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
