import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-bq',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '0.0.2',
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
    npm: 'rollup-plugin-serve-bq',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-bq',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
