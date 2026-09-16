import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@voidvolker/rollup-copy',
  description: 'Rollup plugin to copy node modules to target dir',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup-copy',
  ],
  source: {
    github: 'VoidVolker/rollup-copy',
    npm: '@voidvolker/rollup-copy',
  },
  links: {
    github: 'https://github.com/VoidVolker/rollup-copy',
    npm: 'https://www.npmjs.com/package/@voidvolker/rollup-copy',
    website: 'https://github.com/VoidVolker/rollup-copy#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 3,
    },
  },
})
