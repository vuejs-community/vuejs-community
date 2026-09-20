import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-typescript',
  description: 'Seamless integration between Rollup and TypeScript.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'typescript',
    'es2015',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-typescript',
    website: 'https://github.com/rollup/plugins/tree/master/packages/typescript/#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-typescript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12654289,
      weekly: 2492900,
    },
  },
})
