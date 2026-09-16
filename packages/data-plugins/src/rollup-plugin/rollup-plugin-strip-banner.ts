import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-banner',
  description: 'Rollup plugin that can be used to remove banner on modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-strip-banner',
    npm: 'rollup-plugin-strip-banner',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-strip-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strip-banner',
    website: 'https://github.com/mjeanroy/rollup-plugin-strip-banner#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 68707,
      weekly: 11379,
    },
  },
})
