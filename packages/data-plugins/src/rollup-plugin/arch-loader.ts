import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'arch-loader',
  description: 'traverse project on arch',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'mutil-project',
    'webpack-loader',
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/arch-loader',
  },
  source: {
    npm: 'arch-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
