import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-less-modules',
  description: 'The rollup plugin that compiles imported LESS files into CSS',
  version: '0.1.11',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'less',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/katrotz/rollup-plugin-less-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-less-modules',
  },
  stats: {
    downloads: {
      monthly: 251,
      weekly: 56,
    },
  },
})
