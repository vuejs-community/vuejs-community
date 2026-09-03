import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hot',
  description: '> HMR plugin for Rollup, leveraging SystemJS',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'hmr',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rixo/rollup-plugin-hot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hot',
  },
  stats: {
    downloads: {
      monthly: 1610,
      weekly: 293,
    },
  },
})
