import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve2',
  description: 'Serve your rolled up bundle',
  icon: 'logos:rollupjs',
  version: '1.1.2',
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
    github: 'GGICE/rollup-plugin-serve',
    npm: 'rollup-plugin-serve2',
  },
  links: {
    github: 'https://github.com/GGICE/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve2',
  },
  stats: {
    downloads: {
      monthly: 199,
      weekly: 151,
    },
  },
})
