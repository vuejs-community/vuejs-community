import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-terser-js',
  description: 'Rollup plugin to minify generated es2015 bundle using terser',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify',
    'minify',
  ],
  source: {
    npm: 'rollup-plugin-terser-js',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-terser-js',
    website: 'https://bitbucket.org/robhicks55/rollup-plugin-terser-js/src/master/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 76,
      weekly: 38,
    },
  },
})
