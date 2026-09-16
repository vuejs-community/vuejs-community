import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es6-class-minify',
  description: 'A minifier for ES6 objects',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minify',
    'es6',
  ],
  source: {
    github: 'KristofJannes/rollup-plugin-es6-class-minify',
    npm: 'rollup-plugin-es6-class-minify',
  },
  links: {
    github: 'https://github.com/KristofJannes/rollup-plugin-es6-class-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es6-class-minify',
    website: 'https://github.com/KristofJannes/rollup-plugin-es6-class-minify#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 71,
      weekly: 15,
    },
  },
})
