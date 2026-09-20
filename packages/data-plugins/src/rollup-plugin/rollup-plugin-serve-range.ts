import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-range',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'dev-server',
    'static',
  ],
  links: {
    github: 'https://github.com/huzunjie/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-range',
    website: 'https://github.com/huzunjie/rollup-plugin-serve',
  },
  source: {
    github: 'huzunjie/rollup-plugin-serve',
    npm: 'rollup-plugin-serve-range',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
