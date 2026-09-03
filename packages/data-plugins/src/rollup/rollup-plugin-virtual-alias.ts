import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-virtual-alias',
  description: 'Alias dependencies using virtual modules. (Such as \'react\' to \'preact-compat\')',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-virtual-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-virtual-alias',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 9,
    },
  },
})
