import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@toss/stylexswc-rollup-plugin',
  description: 'StyleX rollup plugin with NAPI-RS compiler',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rolup',
    'stylex',
    'swc',
  ],
  source: {
    github: 'Dwlad90/stylex-swc-plugin',
    npm: '@toss/stylexswc-rollup-plugin',
  },
  links: {
    github: 'https://github.com/Dwlad90/stylex-swc-plugin',
    npm: 'https://www.npmjs.com/package/@toss/stylexswc-rollup-plugin',
    website: 'https://github.com/Dwlad90/stylex-swc-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
