import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lessify',
  description: 'A rollup plugin that compiles less files into css',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'less',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'aptivator/rollup-plugin-lessify',
    npm: 'rollup-plugin-lessify',
  },
  links: {
    github: 'https://github.com/aptivator/rollup-plugin-lessify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lessify',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 15,
    },
  },
})
