import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replace-ast',
  description: 'rollup插件，使用AST方式的rollup-plugin-replace类似插件',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'idler8/rollup-plugin-replace-ast',
    npm: 'rollup-plugin-replace-ast',
  },
  links: {
    github: 'https://github.com/idler8/rollup-plugin-replace-ast',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replace-ast',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
