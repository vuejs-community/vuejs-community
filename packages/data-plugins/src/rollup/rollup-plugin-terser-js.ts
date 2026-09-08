import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-terser-js',
  description: 'Rollup plugin to minify generated es2015 bundle using terser',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-terser-js',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-terser-js',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 11,
    },
  },
})
