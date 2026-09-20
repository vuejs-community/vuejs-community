import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gulp',
  description: 'allows gulp plugins to be used as Rollup transforms',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'gulp',
  ],
  links: {
    github: 'https://github.com/Permutatrix/rollup-plugin-gulp',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gulp',
    website: 'https://github.com/Permutatrix/rollup-plugin-gulp#readme',
  },
  source: {
    github: 'Permutatrix/rollup-plugin-gulp',
    npm: 'rollup-plugin-gulp',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
