import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rewrite',
  description: 'rewrite code using renderChunk',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rewrite',
    'find',
    'replace',
    'regex',
    'regexp',
    'transform',
  ],
  links: {
    github: 'https://github.com/armujahid/rollup-plugin-rewrite',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rewrite',
    website: 'https://github.com/armujahid/rollup-plugin-rewrite#readme',
  },
  source: {
    github: 'armujahid/rollup-plugin-rewrite',
    npm: 'rollup-plugin-rewrite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 48,
      weekly: 5,
    },
  },
})
