import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cpy2',
  description: 'Simple rollup plugin to copy static assets over to you public directory',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'copy',
    'plugin',
    'rollup-plugin',
  ],
  source: {
    github: 'lovelope/rollup-plugin-cpy',
    npm: 'rollup-plugin-cpy2',
  },
  links: {
    github: 'https://github.com/lovelope/rollup-plugin-cpy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cpy2',
    website: 'https://github.com/lovelope/rollup-plugin-cpy#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
