import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-marko',
  description: 'Marko transform/plugin for Rollup',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'marko',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/marko-js/markoify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-marko',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
