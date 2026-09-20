import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-edit',
  description: 'A Rollup plugin to edit generated file contents.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'edit',
  ],
  links: {
    github: 'https://github.com/Arnesfield/rollup-plugin-edit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-edit',
    website: 'https://github.com/Arnesfield/rollup-plugin-edit#readme',
  },
  source: {
    github: 'Arnesfield/rollup-plugin-edit',
    npm: 'rollup-plugin-edit',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
