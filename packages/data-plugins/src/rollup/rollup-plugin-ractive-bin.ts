import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ractive-bin',
  description: 'build Ractive.js components using rollup and the library behind the ractive bin',
  version: '2.0.0-alpha-3',
  category: 'plugin',
  tags: [
    'ractive',
    'rollup-plugin',
    'component',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ractivejs/rollup-plugin-ractive-bin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ractive-bin',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
