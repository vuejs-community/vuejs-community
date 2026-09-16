import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve',
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
  source: {
    github: 'thgh/rollup-plugin-serve',
    npm: 'rollup-plugin-serve',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve',
    website: 'https://github.com/thgh/rollup-plugin-serve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 235546,
      weekly: 53559,
    },
  },
})
