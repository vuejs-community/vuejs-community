import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-mock-server',
  description: 'Rollup plugin to run node-mock-server both as server and as mock api',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/dschulten/rollup-plugin-node-mock-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-mock-server',
    website: 'https://github.com/dschulten/rollup-plugin-node-mock-server',
  },
  source: {
    github: 'dschulten/rollup-plugin-node-mock-server',
    npm: 'rollup-plugin-node-mock-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
