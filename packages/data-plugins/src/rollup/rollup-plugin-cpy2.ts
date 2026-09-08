import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cpy2',
  description: 'Simple rollup plugin to copy static assets over to you public directory',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'copy',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'lovelope/rollup-plugin-cpy',
    npm: 'rollup-plugin-cpy2',
  },
  links: {
    github: 'https://github.com/lovelope/rollup-plugin-cpy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cpy2',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
