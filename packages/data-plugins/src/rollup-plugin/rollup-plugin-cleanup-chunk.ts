import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleanup-chunk',
  description: 'Extension of `rollup-plugin-cleanup` which allows to clean code in `renderChunk` hook',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'gavar/wrench',
    npm: 'rollup-plugin-cleanup-chunk',
  },
  links: {
    github: 'https://github.com/gavar/wrench',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleanup-chunk',
    website: 'https://github.com/gavar/wrench/tree/master/packages/rollup-plugin-cleanup-chunk#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
