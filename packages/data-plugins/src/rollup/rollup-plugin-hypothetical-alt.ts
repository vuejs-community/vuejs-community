import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hypothetical-alt',
  description: 'gives Rollup an imaginary file system, e.g. for testing other plugins',
  icon: 'logos:rollupjs',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Permutatrix/rollup-plugin-hypothetical',
    npm: 'rollup-plugin-hypothetical-alt',
  },
  links: {
    github: 'https://github.com/Permutatrix/rollup-plugin-hypothetical',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hypothetical-alt',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
