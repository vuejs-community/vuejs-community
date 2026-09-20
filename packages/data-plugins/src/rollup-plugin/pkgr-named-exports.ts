import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pkgr/named-exports',
  description: 'Union `namedExports` definitions for rollup-plugin-commonjs',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'named-exports',
    'rollup',
    'rollup-config',
    'rollup-plugin',
    'rollup-plugin-commonjs',
  ],
  links: {
    github: 'https://github.com/rx-ts/pkgr',
    npm: 'https://www.npmjs.com/package/@pkgr/named-exports',
    website: 'https://github.com/rx-ts/pkgr/blob/master/packages/named-exports',
  },
  source: {
    github: 'rx-ts/pkgr',
    npm: '@pkgr/named-exports',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 906,
      weekly: 104,
    },
  },
})
