import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-manifest',
  description: 'A rollup plugin to generate a manifest file for the bundle.',
  icon: 'logos:rollupjs',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'bundle',
    'manifest',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'cchaonie/rollup-plugin-bundle-manifest',
    npm: 'rollup-plugin-bundle-manifest',
  },
  links: {
    github: 'https://github.com/cchaonie/rollup-plugin-bundle-manifest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-manifest',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
