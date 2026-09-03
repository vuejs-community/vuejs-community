import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lit-html-style',
  description: 'rollup plugin for extracting style and embed into lit html',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'webcomponent',
    'lit-html',
    'lit-element',
    'scss',
    'sass',
    'template',
    'postcss',
    'literal',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/odinr/rollup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lit-html-style',
  },
  stats: {
    downloads: {
      monthly: 75,
      weekly: 10,
    },
  },
})
