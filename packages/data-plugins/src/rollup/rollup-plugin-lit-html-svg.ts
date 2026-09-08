import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lit-html-svg',
  description: 'rollup plugin for extracting svg and embed into lit html',
  icon: 'logos:rollupjs',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'lit-html',
    'template',
    'minify',
    'svg',
    'svgo',
    'literal',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'odinr/rollup',
    npm: 'rollup-plugin-lit-html-svg',
  },
  links: {
    github: 'https://github.com/odinr/rollup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lit-html-svg',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 3,
    },
  },
})
