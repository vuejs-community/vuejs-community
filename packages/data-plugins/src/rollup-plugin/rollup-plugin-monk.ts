import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-monk',
  description: 'Allows for compiling monkberry templates.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'JavaGT/rollup-plugin-monk',
    npm: 'rollup-plugin-monk',
  },
  links: {
    github: 'https://github.com/JavaGT/rollup-plugin-monk',
    npm: 'https://www.npmjs.com/package/rollup-plugin-monk',
    website: 'https://github.com/JavaGT/rollup-plugin-monk#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
