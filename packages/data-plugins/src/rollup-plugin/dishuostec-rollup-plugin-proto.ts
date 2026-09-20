import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dishuostec/rollup-plugin-proto',
  description: 'Rollup probobuf(.proto) files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'protobuf',
  ],
  links: {
    github: 'https://github.com/dishuostec/rollup-plugin-proto',
    npm: 'https://www.npmjs.com/package/@dishuostec/rollup-plugin-proto',
    website: 'https://github.com/dishuostec/rollup-plugin-proto#readme',
  },
  source: {
    github: 'dishuostec/rollup-plugin-proto',
    npm: '@dishuostec/rollup-plugin-proto',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
