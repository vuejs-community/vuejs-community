import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entrypoints-output',
  description: 'A Rollup plugin for generating a JSON file containing the outputs for each input/entrypoint',
  version: '1.0.0-rc.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'entrypoints',
    'json',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/roberekson/rollup-plugin-entrypoints-output',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entrypoints-output',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
