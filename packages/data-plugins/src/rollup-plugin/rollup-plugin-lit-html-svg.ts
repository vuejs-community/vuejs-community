import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lit-html-svg',
  description: 'rollup plugin for extracting svg and embed into lit html',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'lit-html',
    'template',
    'minify',
    'svg',
    'svgo',
    'literal',
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
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
