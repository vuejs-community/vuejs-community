import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-serve2',
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
    github: 'GGICE/rollup-plugin-serve',
    npm: 'rollup-plugin-serve2',
  },
  links: {
    github: 'https://github.com/GGICE/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-serve2',
    website: 'https://github.com/GGICE/rollup-plugin-serve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 183,
      weekly: 11,
    },
  },
})
