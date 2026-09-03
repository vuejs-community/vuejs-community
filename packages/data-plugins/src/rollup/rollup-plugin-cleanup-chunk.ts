import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleanup-chunk',
  description: 'Extension of `rollup-plugin-cleanup` which allows to clean code in `renderChunk` hook',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'cleanup',
    'comments',
    'es6',
    'javascript',
    'modules',
    'removal',
    'rollup',
    'rollup-plugin',
    'rollup-plugin-cleanup',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/gavar/wrench',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleanup-chunk',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
