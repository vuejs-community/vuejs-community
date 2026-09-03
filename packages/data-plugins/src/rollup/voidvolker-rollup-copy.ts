import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@voidvolker/rollup-copy',
  description: 'Rollup plugin to copy node modules to target dir',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup-copy',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/VoidVolker/rollup-copy',
    npm: 'https://www.npmjs.com/package/@voidvolker/rollup-copy',
  },
  stats: {
    downloads: {
      monthly: 112,
      weekly: 6,
    },
  },
})
