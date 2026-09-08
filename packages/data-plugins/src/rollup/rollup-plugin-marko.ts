import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-marko',
  description: 'Marko transform/plugin for Rollup',
  icon: 'logos:rollupjs',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'marko',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'marko-js/markoify',
    npm: 'rollup-plugin-marko',
  },
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
