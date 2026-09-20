import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-concurrent-top-level-await',
  description: 'Rollup (and Vite) plugin enabling concurrent execution of modules that contain top level await.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/zOadT/concurrent-top-level-await-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-concurrent-top-level-await',
    website: 'https://github.com/zOadT/concurrent-top-level-await-plugins/tree/main/packages/rollup-plugin#readme',
  },
  source: {
    github: 'zOadT/concurrent-top-level-await-plugins',
    npm: 'rollup-plugin-concurrent-top-level-await',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 94,
      weekly: 6,
    },
  },
})
