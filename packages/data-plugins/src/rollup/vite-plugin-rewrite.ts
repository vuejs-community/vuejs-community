import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rewrite',
  description: '基于rollup，对指定文件，按照规则覆盖',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rewrite',
    'find',
    'replace',
    'regex',
    'regexp',
    'transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/moke8/vite-plugin-rewrite',
    npm: 'https://www.npmjs.com/package/vite-plugin-rewrite',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 21,
    },
  },
})
