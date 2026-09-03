import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-flow',
  description: 'Remove Flow type annotations before bundling.',
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
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-flow',
    npm: 'https://www.npmjs.com/package/rollup-plugin-flow',
  },
  stats: {
    downloads: {
      monthly: 38140,
      weekly: 8466,
    },
  },
})
