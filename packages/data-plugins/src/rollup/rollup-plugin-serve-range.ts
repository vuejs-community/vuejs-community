import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-range',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '1.0.1',
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
    github: 'huzunjie/rollup-plugin-serve',
    npm: 'rollup-plugin-serve-range',
  },
  links: {
    github: 'https://github.com/huzunjie/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-range',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
