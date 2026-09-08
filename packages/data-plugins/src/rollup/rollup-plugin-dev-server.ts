import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dev-server',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'genie88/rollup-plugin-server',
    npm: 'rollup-plugin-dev-server',
  },
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
