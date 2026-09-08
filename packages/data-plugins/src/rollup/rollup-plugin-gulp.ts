import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gulp',
  description: 'allows gulp plugins to be used as Rollup transforms',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'gulp',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Permutatrix/rollup-plugin-gulp',
    npm: 'rollup-plugin-gulp',
  },
  links: {
    github: 'https://github.com/Permutatrix/rollup-plugin-gulp',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gulp',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
