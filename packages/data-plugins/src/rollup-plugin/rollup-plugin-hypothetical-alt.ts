import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hypothetical-alt',
  description: 'gives Rollup an imaginary file system, e.g. for testing other plugins',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'Permutatrix/rollup-plugin-hypothetical',
    npm: 'rollup-plugin-hypothetical-alt',
  },
  links: {
    github: 'https://github.com/Permutatrix/rollup-plugin-hypothetical',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hypothetical-alt',
    website: 'https://github.com/Permutatrix/rollup-plugin-hypothetical#readme',
  },
  stats: {
    stars: 47,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
