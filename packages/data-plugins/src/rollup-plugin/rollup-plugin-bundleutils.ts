import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundleutils',
  description: 'A set of functions commonly used after tree shaking',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle',
    'utils',
    'bundleutils',
  ],
  links: {
    github: 'https://github.com/pschroen/rollup-plugin-bundleutils',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundleutils',
    website: 'https://github.com/pschroen/rollup-plugin-bundleutils#readme',
  },
  source: {
    github: 'pschroen/rollup-plugin-bundleutils',
    npm: 'rollup-plugin-bundleutils',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 1620,
      weekly: 281,
    },
  },
})
