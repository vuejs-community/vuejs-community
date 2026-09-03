import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'jtfell-rollup-plugin-serve',
  description: 'Serve your rolled up bundle',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'dev-server',
    'static',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/jtfell-rollup-plugin-serve',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 5,
    },
  },
})
