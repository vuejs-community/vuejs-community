import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-protobuf',
  description: 'Rollup protobuf plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'protobuf',
  ],
  source: {
    npm: 'rollup-plugin-protobuf',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-protobuf',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
