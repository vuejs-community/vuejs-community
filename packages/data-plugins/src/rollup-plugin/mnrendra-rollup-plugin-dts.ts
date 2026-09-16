import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-dts',
  description: 'A "rollup-plugin-dts" with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both CommonJS and ES Module formats.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin-dts',
    'rollup-plugin',
    'rollup',
    'plugin',
    'dts',
  ],
  source: {
    github: 'mnrendra/rollup-plugin-dts',
    npm: '@mnrendra/rollup-plugin-dts',
  },
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-dts',
    website: 'https://github.com/mnrendra/rollup-plugin-dts#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
