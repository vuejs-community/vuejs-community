import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '3.0.0',
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
  source: {
    github: 'thgh/rollup-plugin-serve',
    npm: 'rollup-plugin-serve',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve',
  },
  stats: {
    downloads: {
      monthly: 233818,
      weekly: 68418,
    },
  },
})
