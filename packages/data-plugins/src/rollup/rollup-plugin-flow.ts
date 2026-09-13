import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-flow',
  description: 'Remove Flow type annotations before bundling.',
  icon: 'logos:rollupjs',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'flow',
    'flowtype',
    'strip',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'leebyron/rollup-plugin-flow',
    npm: 'rollup-plugin-flow',
  },
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-flow',
    npm: 'https://www.npmjs.com/package/rollup-plugin-flow',
  },
  stats: {
    downloads: {
      monthly: 31159,
      weekly: 5905,
    },
  },
})
