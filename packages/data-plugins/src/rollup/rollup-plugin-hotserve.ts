import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hotserve',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '1.0.4',
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
    npm: 'rollup-plugin-hotserve',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hotserve',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
