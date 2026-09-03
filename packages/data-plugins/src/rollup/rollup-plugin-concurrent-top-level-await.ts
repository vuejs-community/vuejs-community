import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-concurrent-top-level-await',
  description: 'Rollup (and Vite) plugin enabling concurrent execution of modules that contain top level await.',
  version: '0.4.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'top-level-await',
    'tla',
    'concurrent',
    'async',
    'modules',
    'es2022',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zOadT/concurrent-top-level-await-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-concurrent-top-level-await',
  },
  stats: {
    downloads: {
      monthly: 146,
      weekly: 40,
    },
  },
})
