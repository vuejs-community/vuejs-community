import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bstoots/rollup-plugin-terser',
  description: 'Rollup plugin to minify generated es bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'terser',
    'minify',
  ],
  links: {
    github: 'https://github.com/bstoots/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@bstoots/rollup-plugin-terser',
    website: 'https://github.com/bstoots/rollup-plugin-terser#readme',
  },
  source: {
    github: 'bstoots/rollup-plugin-terser',
    npm: '@bstoots/rollup-plugin-terser',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
