import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-drop-console',
  description: 'A rollup plugin used to drop (window.)console.*',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'transform',
    'console',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/chouchouji/rollup-plugin-drop-console',
    npm: 'https://www.npmjs.com/package/rollup-plugin-drop-console',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
