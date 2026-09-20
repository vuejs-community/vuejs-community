import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-closure-compiler',
  description: 'Rollup plugin to minify generated bundle with google-closure-compiler(Java).',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'closure-compiler',
    'closure-compiler-js',
  ],
  links: {
    github: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-closure-compiler',
    website: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler#readme',
  },
  source: {
    github: 'rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'rollup-plugin-closure-compiler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 10,
    },
  },
})
