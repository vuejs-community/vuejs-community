import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-favicon',
  description: 'Serve your rolled up bundle',
  version: '0.4.7',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-favicon',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
