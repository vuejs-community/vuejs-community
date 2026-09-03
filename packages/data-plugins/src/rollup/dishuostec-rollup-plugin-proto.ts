import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dishuostec/rollup-plugin-proto',
  description: 'Rollup probobuf(.proto) files.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'protobuf',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dishuostec/rollup-plugin-proto',
    npm: 'https://www.npmjs.com/package/@dishuostec/rollup-plugin-proto',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
