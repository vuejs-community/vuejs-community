import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dev-server',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'server',
    'dev-server',
    'static',
  ],
  links: {
    github: 'https://github.com/genie88/rollup-plugin-server',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dev-server',
    website: 'https://github.com/genie88/rollup-plugin-server',
  },
  source: {
    github: 'genie88/rollup-plugin-server',
    npm: 'rollup-plugin-dev-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 188,
      weekly: 20,
    },
  },
})
