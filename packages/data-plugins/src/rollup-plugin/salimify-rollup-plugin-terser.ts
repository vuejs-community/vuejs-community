import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@salimify/rollup-plugin-terser',
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
    github: 'https://github.com/TrySound/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@salimify/rollup-plugin-terser',
  },
  source: {
    github: 'TrySound/rollup-plugin-terser',
    npm: '@salimify/rollup-plugin-terser',
  },
  stats: {
    stars: 606,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
