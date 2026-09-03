import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-server',
  description: 'Server your rolled up bundle',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'server',
    'dev-server',
    'static',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/fkei/rollup-plugin-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-server',
  },
  stats: {
    downloads: {
      monthly: 429,
      weekly: 183,
    },
  },
})
