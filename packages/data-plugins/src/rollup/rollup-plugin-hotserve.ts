import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hotserve',
  description: 'Serve your rolled up bundle',
  version: '1.0.4',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-hotserve',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
