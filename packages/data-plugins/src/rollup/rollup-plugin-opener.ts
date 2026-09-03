import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-opener',
  description: 'Serve rollup bundle and open in browser',
  version: '0.2.3',
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
