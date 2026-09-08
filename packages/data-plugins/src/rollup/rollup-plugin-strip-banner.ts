import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-banner',
  description: 'Rollup plugin that can be used to remove banner on modules',
  icon: 'logos:rollupjs',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-strip-banner',
    npm: 'rollup-plugin-strip-banner',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-strip-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strip-banner',
  },
  stats: {
    downloads: {
      monthly: 78592,
      weekly: 14077,
    },
  },
})
