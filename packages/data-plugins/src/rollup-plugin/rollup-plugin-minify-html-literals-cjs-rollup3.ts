import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify-html-literals-cjs-rollup3',
  description: 'Rollup plugin to minify HTML template literal strings. Forked so that it uses the rollup3 compatible code, but not the ESM version. Will archive when Liz does her release...',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minify',
    'html',
    'literal',
    'literals',
    'template',
    'tagged',
    'lit-html',
  ],
  links: {
    github: 'https://github.com/asyncLiz/rollup-plugin-minify-html-literals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify-html-literals-cjs-rollup3',
    website: 'https://github.com/asyncLiz/rollup-plugin-minify-html-literals#readme',
  },
  source: {
    github: 'asyncLiz/rollup-plugin-minify-html-literals',
    npm: 'rollup-plugin-minify-html-literals-cjs-rollup3',
  },
  stats: {
    stars: 65,
    downloads: {
      monthly: 103,
      weekly: 6,
    },
  },
})
