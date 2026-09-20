import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve-proxy',
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
    github: 'https://github.com/calebdwilliams/rollup-plugin-devserver',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve-proxy',
    website: 'https://github.com/calebdwilliams/rollup-plugin-devserver',
  },
  source: {
    github: 'calebdwilliams/rollup-plugin-devserver',
    npm: 'rollup-plugin-serve-proxy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 646,
      weekly: 132,
    },
  },
})
