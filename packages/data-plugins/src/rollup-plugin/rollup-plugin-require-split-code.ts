import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-require-split-code',
  description: 'Enable code splitting with require()',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'commonjs',
    'cjs',
    'require',
    'splitting',
    'transform',
  ],
  source: {
    github: 'eight04/rollup-plugin-require-split-code',
    npm: 'rollup-plugin-require-split-code',
  },
  links: {
    github: 'https://github.com/eight04/rollup-plugin-require-split-code',
    npm: 'https://www.npmjs.com/package/rollup-plugin-require-split-code',
    website: 'https://github.com/eight04/rollup-plugin-require-split-code#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 8,
    },
  },
})
