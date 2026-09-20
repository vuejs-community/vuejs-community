import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-concurrent-top-level-await',
  description: 'Rolldown (and Vite) plugin enabling concurrent execution of modules that contain top level await.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
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
  links: {
    github: 'https://github.com/zOadT/concurrent-top-level-await-plugins',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-concurrent-top-level-await',
    website: 'https://github.com/zOadT/concurrent-top-level-await-plugins/tree/main/packages/rolldown-plugin#readme',
  },
  source: {
    github: 'zOadT/concurrent-top-level-await-plugins',
    npm: 'rolldown-plugin-concurrent-top-level-await',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 50,
      weekly: 3,
    },
  },
})
