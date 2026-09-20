import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-flow',
  description: 'Remove Flow type annotations before bundling.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'flow',
    'flowtype',
    'strip',
  ],
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-flow',
    npm: 'https://www.npmjs.com/package/rollup-plugin-flow',
    website: 'https://github.com/leebyron/rollup-plugin-flow',
  },
  source: {
    github: 'leebyron/rollup-plugin-flow',
    npm: 'rollup-plugin-flow',
  },
  stats: {
    stars: 81,
    downloads: {
      monthly: 31159,
      weekly: 5905,
    },
  },
})
