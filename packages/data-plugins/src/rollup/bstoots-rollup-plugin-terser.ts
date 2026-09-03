import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bstoots/rollup-plugin-terser',
  description: 'Rollup plugin to minify generated es bundle',
  version: '7.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'terser',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/bstoots/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@bstoots/rollup-plugin-terser',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
