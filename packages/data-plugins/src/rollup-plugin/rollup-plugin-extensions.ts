import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-extensions',
  description: 'Allow rollup to resolve local files with any extension',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'extension',
    'extensions',
    'resolve',
  ],
  links: {
    github: 'https://github.com/zelzen/rollup-plugin-extensions',
    npm: 'https://www.npmjs.com/package/rollup-plugin-extensions',
  },
  source: {
    github: 'zelzen/rollup-plugin-extensions',
    npm: 'rollup-plugin-extensions',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 4322,
      weekly: 880,
    },
  },
})
