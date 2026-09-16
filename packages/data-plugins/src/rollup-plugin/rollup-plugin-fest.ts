import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fest',
  description: 'Rollup plugin to compile fest templates',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'dmitryshimkin/rollup-plugin-fest',
    npm: 'rollup-plugin-fest',
  },
  links: {
    github: 'https://github.com/dmitryshimkin/rollup-plugin-fest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fest',
    website: 'https://github.com/dmitryshimkin/rollup-plugin-fest#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
