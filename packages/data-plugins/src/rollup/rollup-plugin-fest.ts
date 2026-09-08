import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fest',
  description: 'Rollup plugin to compile fest templates',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dmitryshimkin/rollup-plugin-fest',
    npm: 'rollup-plugin-fest',
  },
  links: {
    github: 'https://github.com/dmitryshimkin/rollup-plugin-fest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fest',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
