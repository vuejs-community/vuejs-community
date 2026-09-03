import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@salimify/rollup-plugin-terser',
  description: 'Rollup plugin to minify generated es bundle',
  version: '7.0.4',
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
    github: 'https://github.com/TrySound/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@salimify/rollup-plugin-terser',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
