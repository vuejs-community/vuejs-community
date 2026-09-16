import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-virtual',
  description: 'Load virtual modules from memory',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'memory',
    'module',
    'modules',
    'virtual',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-virtual',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-virtual',
    website: 'https://github.com/rollup/plugins/tree/master/packages/virtual#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4574925,
      weekly: 972604,
    },
  },
})
