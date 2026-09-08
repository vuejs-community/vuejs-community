import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-opener',
  description: 'Serve rollup bundle and open in browser',
  icon: 'logos:rollupjs',
  version: '0.2.4',
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
    github: 'aarsteinmedia/rollup-plugin-opener',
    npm: 'rollup-plugin-opener',
  },
  links: {
    github: 'https://github.com/aarsteinmedia/rollup-plugin-opener',
    npm: 'https://www.npmjs.com/package/rollup-plugin-opener',
  },
  stats: {
    downloads: {
      monthly: 207,
      weekly: 10,
    },
  },
})
