import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-edit',
  description: 'A Rollup plugin to edit generated file contents.',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'edit',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Arnesfield/rollup-plugin-edit',
    npm: 'rollup-plugin-edit',
  },
  links: {
    github: 'https://github.com/Arnesfield/rollup-plugin-edit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-edit',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 9,
    },
  },
})
