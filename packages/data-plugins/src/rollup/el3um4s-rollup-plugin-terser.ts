import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@el3um4s/rollup-plugin-terser',
  description: 'Rollup plugin to minify generated es bundle',
  version: '1.0.2',
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
    github: 'https://github.com/el3um4s/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@el3um4s/rollup-plugin-terser',
  },
  stats: {
    downloads: {
      monthly: 650,
      weekly: 156,
    },
  },
})
