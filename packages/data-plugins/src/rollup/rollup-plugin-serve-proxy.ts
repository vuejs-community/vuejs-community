import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-proxy',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '1.1.4',
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
    github: 'calebdwilliams/rollup-plugin-devserver',
    npm: 'rollup-plugin-serve-proxy',
  },
  links: {
    github: 'https://github.com/calebdwilliams/rollup-plugin-devserver',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-proxy',
  },
  stats: {
    downloads: {
      monthly: 596,
      weekly: 24,
    },
  },
})
