import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-server',
  description: 'Server your rolled up bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'server',
    'dev-server',
    'static',
  ],
  links: {
    github: 'https://github.com/fkei/rollup-plugin-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-server',
    website: 'https://github.com/fkei/rollup-plugin-server',
  },
  source: {
    github: 'fkei/rollup-plugin-server',
    npm: 'rollup-plugin-server',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 418,
      weekly: 50,
    },
  },
})
