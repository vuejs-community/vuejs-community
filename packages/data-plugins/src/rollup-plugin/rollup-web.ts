import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-web',
  description: 'Compile your project all in browser!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'browser',
    'browserify',
    'plugin',
    'plugins',
    'rollup-plugin',
    'playground',
    'compiler',
  ],
  source: {
    github: 'KonghaYao/rollup-web',
    npm: 'rollup-web',
  },
  links: {
    github: 'https://github.com/KonghaYao/rollup-web',
    npm: 'https://www.npmjs.com/package/rollup-web',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 49,
      weekly: 9,
    },
  },
})
