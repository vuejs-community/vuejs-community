import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dev-server',
  description: 'Serve your rolled up bundle',
  version: '0.4.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'server',
    'dev-server',
    'static',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/genie88/rollup-plugin-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dev-server',
  },
  stats: {
    downloads: {
      monthly: 240,
      weekly: 119,
    },
  },
})
