import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-buble',
  description: 'Compile ES2015 with buble',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'buble',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-buble',
    website: 'https://github.com/rollup/plugins/tree/master/packages/buble/#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-buble',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 92391,
      weekly: 16913,
    },
  },
})
