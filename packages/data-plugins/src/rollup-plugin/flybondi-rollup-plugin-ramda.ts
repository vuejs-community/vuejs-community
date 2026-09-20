import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@flybondi/rollup-plugin-ramda',
  description: 'Removes unused ramda dependencies',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'modules',
    'ramda',
  ],
  links: {
    github: 'https://github.com/flybondi/rollup-plugin-ramda',
    npm: 'https://www.npmjs.com/package/@flybondi/rollup-plugin-ramda',
    website: 'https://github.com/flybondi/rollup-plugin-ramda#readme',
  },
  source: {
    github: 'flybondi/rollup-plugin-ramda',
    npm: '@flybondi/rollup-plugin-ramda',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 7,
    },
  },
})
