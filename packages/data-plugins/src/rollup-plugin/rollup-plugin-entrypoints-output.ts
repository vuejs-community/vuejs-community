import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entrypoints-output',
  description: 'A Rollup plugin for generating a JSON file containing the outputs for each input/entrypoint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'entrypoints',
    'json',
  ],
  links: {
    github: 'https://github.com/roberekson/rollup-plugin-entrypoints-output',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entrypoints-output',
    website: 'https://github.com/roberekson/rollup-plugin-entyrpoints-output#readme',
  },
  source: {
    github: 'roberekson/rollup-plugin-entrypoints-output',
    npm: 'rollup-plugin-entrypoints-output',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
