import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@el3um4s/rollup-plugin-terser',
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
  source: {
    github: 'el3um4s/rollup-plugin-terser',
    npm: '@el3um4s/rollup-plugin-terser',
  },
  links: {
    github: 'https://github.com/el3um4s/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@el3um4s/rollup-plugin-terser',
    website: 'https://github.com/el3um4s/rollup-plugin-terser',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 525,
      weekly: 105,
    },
  },
})
