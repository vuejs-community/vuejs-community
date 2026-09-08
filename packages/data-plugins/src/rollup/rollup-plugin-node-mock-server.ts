import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-mock-server',
  description: 'Rollup plugin to run node-mock-server both as server and as mock api',
  icon: 'logos:rollupjs',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'node-mock-server',
    'static',
    'mock',
    'api',
    'swagger',
    'rest api',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dschulten/rollup-plugin-node-mock-server',
    npm: 'rollup-plugin-node-mock-server',
  },
  links: {
    github: 'https://github.com/dschulten/rollup-plugin-node-mock-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-mock-server',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
