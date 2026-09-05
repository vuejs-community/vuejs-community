import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-concurrent-top-level-await',
  description: 'Rolldown (and Vite) plugin enabling concurrent execution of modules that contain top level await.',
  version: '0.3.4',
  category: 'plugin',
  tags: [
    'rolldown-plugin',
    'vite-plugin',
    'top-level-await',
    'tla',
    'concurrent',
    'async',
    'modules',
    'es2022',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/zOadT/concurrent-top-level-await-plugins',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-concurrent-top-level-await',
  },
  stats: {
    downloads: {
      monthly: 116,
      weekly: 14,
    },
  },
})
