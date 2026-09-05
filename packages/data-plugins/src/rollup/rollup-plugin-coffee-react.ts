import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-coffee-react',
  description: 'Rollup plugin to transpile .coffee and .cjsx files',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'cjsx',
    'coffeescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/N1kto/rollup-plugin-coffee-react',
    npm: 'https://www.npmjs.com/package/rollup-plugin-coffee-react',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
