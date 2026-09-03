import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-init',
  description: 'rollup plugin to be able to invoke your bundled js when you want',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'init',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shouston3/rollup-plugin-init',
    npm: 'https://www.npmjs.com/package/rollup-plugin-init',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
