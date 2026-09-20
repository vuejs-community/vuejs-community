import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ractive-bin',
  description: 'build Ractive.js components using rollup and the library behind the ractive bin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'ractive',
    'rollup-plugin',
    'component',
  ],
  links: {
    github: 'https://github.com/ractivejs/rollup-plugin-ractive-bin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ractive-bin',
    website: 'https://github.com/ractivejs/rollup-plugin-ractive-bin#readme',
  },
  source: {
    github: 'ractivejs/rollup-plugin-ractive-bin',
    npm: 'rollup-plugin-ractive-bin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
