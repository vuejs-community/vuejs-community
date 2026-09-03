import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-globlin',
  description: 'Rollup plugin that provides file watching, copy, transform, repath and rename capabilities.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'globs',
    'file transforms',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/panoply/rollup-plugin-globlin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-globlin',
  },
  stats: {
    downloads: {
      monthly: 92,
      weekly: 30,
    },
  },
})
