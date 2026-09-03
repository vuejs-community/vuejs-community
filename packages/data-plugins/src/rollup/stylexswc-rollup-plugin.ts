import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stylexswc/rollup-plugin',
  description: 'StyleX plugin for Rollup powered by a Rust NAPI-RS/SWC compiler. Fast StyleX transforms and CSS extraction without Babel.',
  version: '0.18.6',
  category: 'plugin',
  tags: [
    'atomic-css',
    'css-extraction',
    'css-in-js',
    'lightningcss',
    'napi-rs',
    'rollup',
    'rollup-plugin',
    'rust',
    'stylex',
    'swc',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Dwlad90/stylex-swc-plugin',
    npm: 'https://www.npmjs.com/package/@stylexswc/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 4085,
      weekly: 587,
    },
  },
})
