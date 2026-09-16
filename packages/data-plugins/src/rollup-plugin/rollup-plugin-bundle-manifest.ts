import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-manifest',
  description: 'A rollup plugin to generate a manifest file for the bundle.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle',
    'manifest',
  ],
  source: {
    github: 'cchaonie/rollup-plugin-bundle-manifest',
    npm: 'rollup-plugin-bundle-manifest',
  },
  links: {
    github: 'https://github.com/cchaonie/rollup-plugin-bundle-manifest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-manifest',
    website: 'https://github.com/cchaonie/rollup-plugin-bundle-manifest#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
