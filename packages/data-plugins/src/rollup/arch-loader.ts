import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'arch-loader',
  description: 'traverse project on arch',
  version: '0.4.2',
  category: 'plugin',
  tags: [
    'mutil-project',
    'webpack-loader',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/arch-loader',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 9,
    },
  },
})
