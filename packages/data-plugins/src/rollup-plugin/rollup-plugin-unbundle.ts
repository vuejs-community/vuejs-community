import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unbundle',
  description: 'Rollup plugin for excluding dependencies from bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle',
  ],
  source: {
    github: 'run-z/rollup-plugin-unbundle',
    npm: 'rollup-plugin-unbundle',
  },
  links: {
    github: 'https://github.com/run-z/rollup-plugin-unbundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unbundle',
    website: 'https://github.com/run-z/rollup-plugin-unbundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 109,
      weekly: 9,
    },
  },
})
