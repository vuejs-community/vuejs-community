import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify-html-literals-cjs-rollup3',
  description: 'Rollup plugin to minify HTML template literal strings. Forked so that it uses the rollup3 compatible code, but not the ESM version. Will archive when Liz does her release...',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/asyncLiz/rollup-plugin-minify-html-literals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify-html-literals-cjs-rollup3',
  },
  stats: {
    downloads: {
      monthly: 103,
      weekly: 5,
    },
  },
})
