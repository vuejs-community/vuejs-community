import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@reputation.link/rollup-plugin-polyfill-node',
  description: 'Temporary fork of rollup-plugin-polyfill-node package while main package is broken.',
  version: '0.7.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/snowpackjs/rollup-plugin-polyfill-node',
    npm: 'https://www.npmjs.com/package/@reputation.link/rollup-plugin-polyfill-node',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
