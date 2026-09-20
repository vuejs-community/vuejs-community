import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'jtfell-rollup-plugin-serve',
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
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/jtfell-rollup-plugin-serve',
    website: 'https://github.com/thgh/rollup-plugin-serve',
  },
  source: {
    github: 'thgh/rollup-plugin-serve',
    npm: 'jtfell-rollup-plugin-serve',
  },
  stats: {
    stars: 248,
    downloads: {
      monthly: 71,
      weekly: 26,
    },
  },
})
