import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replace-ast',
  description: 'rollup插件，使用AST方式的rollup-plugin-replace类似插件',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/idler8/rollup-plugin-replace-ast',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replace-ast',
    website: 'https://github.com/idler8/rollup-plugin-replace-ast',
  },
  source: {
    github: 'idler8/rollup-plugin-replace-ast',
    npm: 'rollup-plugin-replace-ast',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
