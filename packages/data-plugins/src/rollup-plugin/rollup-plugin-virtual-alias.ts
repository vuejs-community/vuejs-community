import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-virtual-alias',
  description: 'Alias dependencies using virtual modules. (Such as \'react\' to \'preact-compat\')',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-virtual-alias',
    npm: 'rollup-plugin-virtual-alias',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-virtual-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-virtual-alias',
    website: 'https://github.com/shanewholloway/rollup-plugin-virtual-alias#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 32,
      weekly: 12,
    },
  },
})
